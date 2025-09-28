/**
 * Custom lexer that wraps EoLexer to handle indentation-based TAB/UNTAB tokens
 * Modeled after the Java EoIndentLexer implementation
 * @module IndentationLexer
 */
import { Token, CommonToken, Lexer, CharStream } from "antlr4ts";
import { EoLexer } from "./parser/EoLexer";
import { EoParser } from "./parser/EoParser";

export class IndentationLexer extends Lexer {
    private wrapped: EoLexer;
    private tokens: Token[] = [];
    private indent: number[] = [];
    private spaces: string[] = [];

    public static readonly TAB = EoParser.TAB;
    public static readonly UNTAB = EoParser.UNTAB;

    constructor(input: CharStream) {
        super(input);
        this.wrapped = new EoLexer(input);
        this.indent.push(0);
    }

    /**
     * Returns the part of the string that comes after the first newline character.
     * If no newline is found, returns the entire string.
     * @param text - Input string (typically an EOL token)
     * @returns The substring after the first '\n', or the original string if '\n' is absent.
     */
    private static textSpaces(text: string): string {
        const afterNewline = text.slice(text.indexOf("\n") + 1);

        return afterNewline;
    }

    /**
     * Emits TAB tokens to increase indentation by the specified number of levels.
     * @param shift - Number of indentation levels to add
     * @returns Void
     */
    private emitIndent(shift: number): void {
        for (let i = 0; i < shift; i++) {
            this.emitToken(IndentationLexer.TAB);
        }
    }

    /**
     * Emits UNTAB tokens to decrease indentation by the specified number of levels.
     * @param shift - Number of indentation levels to remove
     * @returns Void
     */
    private emitDedent(shift: number): void {
        for (let i = 0; i < shift; i++) {
            this.emitToken(IndentationLexer.UNTAB);
        }
    }

    /**
     * Creates and emits a new TAB or UNTAB token at the start of the next line.
     * The token's text is set to "TAB" or "UNTAB" based on its type.
     * @param type - Token type (must be IndentationLexer.TAB or IndentationLexer.UNTAB)
     * @returns Void
     */
    private emitToken(type: number) {
        const tkn = new CommonToken(type, type === IndentationLexer.TAB ? "TAB" : "UNTAB");

        tkn.line = this.wrapped.line;
        tkn.charPositionInLine = 0;
        this.tokens.push(tkn);
    }

    /**
     * Adjusts indentation levels and emits TAB/UNTAB tokens based on the difference between
     * the current and previous indentation. Also appends the next token to the token stream.
     * @param tabs - Current indentation level (e.g., number of leading spaces in the new line).
     * @param next - The next token to be processed (e.g., the first token after indentation).
     * @returns Void
     */
    private handleTabs(tabs: number, next: Token): void {
        const last = this.indent[this.indent.length - 1];
        const shift = tabs - last;

        if (shift < 0) {
            let dedentCount = 0;

            while (this.indent.length > 1 && this.indent[this.indent.length - 1] > tabs) {
                this.indent.pop();
                dedentCount++;
            }
            this.emitDedent(dedentCount);
            if (this.indent[this.indent.length - 1] < tabs) {
                this.indent.push(tabs);
                this.emitIndent(1);
            }
        } else if (shift > 0) {
            this.emitIndent(shift);
            this.indent.push(tabs);
        }
        this.tokens.push(next);
    }

    /**
     * Processes indentation by analyzing line breaks (`EOL`) and leading whitespace.
     * - Tracks spaces after each `EOL` to determine indentation levels.
     * - Emits `TAB`/`UNTAB` tokens when indentation increases/decreases.
     * - Closes all open indents at the end (e.g., for unclosed blocks).
     *
     * Logic:
     * 1. For consecutive `EOL` tokens, stores their leading spaces but doesn't change indentation.
     * 2. When a non-`EOL` token follows `EOL`, calculates indentation shift and emits tokens.
     * 3. Finalizes by dedenting remaining levels and appending the last token (usually EOF).
     * @returns Void
     */
    private lookAhead(): void {
        let current: Token | null = null;
        let next = this.wrapped.nextToken();

        while (next.type !== Token.EOF) {
            if ((current === null || current.type !== EoLexer.EOL) && next.type === EoLexer.EOL) {
                this.spaces.push(IndentationLexer.textSpaces(next.text || ""));
                this.tokens.push(next);
            } else if (current !== null && current.type === EoLexer.EOL && next.type === EoLexer.EOL) {
                this.spaces.push(IndentationLexer.textSpaces(next.text || ""));
                this.handleTabs(Math.floor(this.spaces[this.spaces.length - 1].length / 2), next);
            } else if (current !== null && current.type === EoLexer.EOL && next.type !== EoLexer.EOL) {
                const spaceText = this.spaces.pop() || "";

                this.handleTabs(Math.floor(spaceText.length / 2), next);
            } else {
                this.tokens.push(next);
            }
            current = next;
            next = this.wrapped.nextToken();
        }
        if (current !== null) {
            if (current.type === EoLexer.EOL) {
                const spaceText = this.spaces.pop() || "";

                this.handleTabs(Math.floor(spaceText.length / 2), next);
            } else {
                this.tokens.push(current);
            }
        }
        while (this.indent.length > 1) {
            this.indent.pop();
            this.emitDedent(1);
        }
        this.tokens.push(next);
    }

    /**
     * Overrides nextToken to provide indentation-aware tokens
     * @returns Next token
     */
    public nextToken(): Token {
        if (this.tokens.length === 0) {
            this.lookAhead();
        }
        return this.tokens.shift()!;
    }

    /**
     * Removes all error listeners from both this lexer and the wrapped lexer
     * @returns void
     */
    removeErrorListeners(): void {
        super.removeErrorListeners();
        this.wrapped.removeErrorListeners();
    }

    get channelNames(): string[] {
        return this.wrapped.channelNames;
    }
    get grammarFileName(): string {
        return this.wrapped.grammarFileName;
    }
    get modeNames(): string[] {
        return this.wrapped.modeNames;
    }
    get ruleNames(): string[] {
        return this.wrapped.ruleNames;
    }
    get serializedATN(): string {
        return this.wrapped.serializedATN;
    }
    get vocabulary(): any {
        return this.wrapped.vocabulary;
    }
}
