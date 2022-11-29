/**
 * Runs the EO lexer and parser on a given text
 * 
 * @module Processor
 */

import { 
	CharStreams, 
	CommonTokenStream, 
	CodePointCharStream,
} from 'antlr4ts';
import { ProgramLexer } from './parser/ProgramLexer';
import { ProgramParser } from './parser/ProgramParser';

export class Processor {
	/**
	 * Text to be lexed and persed
	 */
	inputStream: CodePointCharStream;
	/**
	 * EO grammar lexer
	 */
	lexer: ProgramLexer;
	/**
	 * Stream of tokens provided by lexer
	 */
	tokenStream: CommonTokenStream;
	/**
	 * EO grammar parser
	 */
	parser: ProgramParser;

	/**
	 * Generates the lexer and parser for the given text.
	 * 
	 * @param input 	Text on which to perform lexing and parsing
	 */
	constructor(input: string) {
		this.inputStream = CharStreams.fromString(input);
		this.lexer = new ProgramLexer(this.inputStream);
		this.tokenStream = new CommonTokenStream(this.lexer);
		this.parser = new ProgramParser(this.tokenStream);
	}
}