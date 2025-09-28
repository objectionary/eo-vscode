import { CharStreams, Token, VocabularyImpl } from "antlr4ts";
import { IndentationLexer } from "../indentationLexer";
import { EoLexer } from "../parser/EoLexer";

describe("IndentationLexer", () => {

    describe("handleTabs", () => {

        test("we expect to emits TAB/UNTAB tokens based on the difference between the current and previous indentation.", () => {
            const input = "  2\n      bar > foo\n    42 > @";
            const chrStream = CharStreams.fromString(input);
            const lexer = new IndentationLexer(chrStream);
            const tokens: Token[] = [];
            let token: Token = lexer.nextToken();

            while (token.type !== Token.EOF) {
                tokens.push(token);
                token = lexer.nextToken();
            }
            const tabTokens = tokens.filter(t => t.type === IndentationLexer.TAB);
            const untabTokens = tokens.filter(t => t.type === IndentationLexer.UNTAB);

            expect(tabTokens.length).toBeGreaterThan(0);
            expect(untabTokens.length).toBeGreaterThan(0);
        });

    });

    describe("getters", () => {

        test("we expect to get all the values", () => {
            const lexer = new IndentationLexer(CharStreams.fromString(""));

            expect(lexer.channelNames).toEqual(EoLexer.channelNames);
            expect(lexer.grammarFileName).toBe("Eo.g4");
            expect(lexer.modeNames).toEqual(EoLexer.modeNames);
            expect(lexer.ruleNames).toEqual(EoLexer.ruleNames);
            /* eslint-disable-next-line no-underscore-dangle */
            expect(lexer.serializedATN).toEqual(EoLexer._serializedATN);
            expect(lexer.vocabulary).toBeInstanceOf(VocabularyImpl);
            expect(lexer.vocabulary).toEqual(EoLexer.VOCABULARY);
        });

    });

    describe("lookAhead", () => {

        test("we expect token to be EOF in an empty CharStreams", () => {
            const input = "";
            const chrStream = CharStreams.fromString(input);
            const lexer = new IndentationLexer(chrStream);
            const tokens: Token[] = [];
            const token = lexer.nextToken();

            tokens.push(token);
            expect(tokens[0].type).toBe(Token.EOF);
        });
    });
});
