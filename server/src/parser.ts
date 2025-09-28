/**
 * Performs the parsing of the text document and reports on errors found.
 * @module Parser
 */

import * as fs from "fs";
import * as path from "path";
import { Token as AntlrToken } from "antlr4ts";
import { Processor } from "./processor";
import { ParserError } from "./parserError";
import { ErrorListener } from "./errorListener";

/**
 * Set of the token types present in the EO's grammar file
 */
let tokenTypes: Set<string> | undefined;

/**
 * Maps the token numbers returned by the parser to the token type names
 * present in the EO's grammar file
 */
let tokenNumToString: Map<number, string> | undefined;

/**
 * Builds the token type set and token number to token type map using the ANTLR4
 * tokens file, if any of these has not been built yet.
 * @returns {void}
 */
function buildTokenSetAndMap() {
    if (!tokenTypes || !tokenNumToString) {
        tokenTypes = new Set<string>();
        tokenNumToString = new Map<number, string>();
        const tokensPath = path.join(__dirname, "../resources/EoLexer.tokens");

        try {
            const text = fs.readFileSync(tokensPath, { encoding: "utf-8" });

            text.split("\n").forEach(elem => {
                if (elem[0] !== "'") {
                    const pair = elem.split("=");

                    if (pair.length === 2) {
                        tokenTypes!.add(pair[0]);
                        tokenNumToString!.set(Number(pair[1]), pair[0]);
                    }
                }
            });
        } catch (e) {
            throw new Error("EoLexer.tokens file missing");
        }
    }
}

/**
 * Converts a type number into textual token type like "META", since antlr lexer
 * returns token types as numbers
 * @param num - Number of the token type returned by the parser
 * @returns - Name of the token type defined by EO's grammar
 */
export function antlrTypeNumToString(num: number): string {
    buildTokenSetAndMap();
    return tokenNumToString!.get(num)!;
}

/**
 * Retrieves all token type names as defined in EO's grammar
 * @returns - Set of all the token type names define in EO's grammar
 */
export function getTokenTypes(): Set<string> {
    buildTokenSetAndMap();
    return tokenTypes!;
}

/**
 * Tokenizes an input text using the ANTLR4 tokenizer
 * @param input - Text to be tokenized
 * @returns - Array of AntlrTokens containing the tokens in the text
 */
export function tokenize(input: string): AntlrToken[] {
    const processor = new Processor(input);

    processor.tokenStream.fill();
    return processor.tokenStream.getTokens();
}

/**
 * Parses the input text and returns the parsing errors detected
 * @param input - Text to be parsed
 * @returns - Array of parsing errors detected during the parsing
 */
export function getParserErrors(input: string): ParserError[] {
    const processor = new Processor(input);
    const errorListener = new ErrorListener();

    processor.parser.addErrorListener(errorListener);
    processor.parser.program();
    return errorListener.errorList;

}
