/**
 * Runs the EO lexer and parser on a given text
 * @module Processor
 */

import {
    CharStreams,
    CommonTokenStream,
    CodePointCharStream
} from "antlr4ts";
import { EoParser } from "./parser/EoParser";
import { IndentationLexer } from "./indentationLexer";

export class Processor {

    /**
     * Text to be lexed and persed
     */
    inputStream: CodePointCharStream;

    /**
     * EO grammar lexer
     */
    lexer: IndentationLexer;

    /**
     * Stream of tokens provided by lexer
     */
    tokenStream: CommonTokenStream;

    /**
     * EO grammar parser
     */
    parser: EoParser;

    /**
     * Generates the lexer and parser for the given text.
     * @param input - Text on which to perform lexing and parsing
     */
    constructor(input: string) {
        this.inputStream = CharStreams.fromString(input);
        this.lexer = new IndentationLexer(this.inputStream);
        this.tokenStream = new CommonTokenStream(this.lexer);
        this.parser = new EoParser(this.tokenStream);
    }
}
