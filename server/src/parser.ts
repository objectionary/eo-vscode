import * as fs from 'fs';
import * as path from 'path';
import { 
	CharStreams, 
	CommonTokenStream, 
	Token as AntlrToken, 
	CodePointCharStream, 
	ANTLRErrorListener,
	Recognizer,
	RecognitionException
} from 'antlr4ts';

import { ProgramLexer } from './parser/ProgramLexer';
import { ProgramParser } from './parser/ProgramParser';

class Processor {
	inputStream: CodePointCharStream;
	lexer: ProgramLexer;
	tokenStream: CommonTokenStream;
	parser: ProgramParser;

	constructor(input: string) {
		this.inputStream = CharStreams.fromString(input);
		this.lexer = new ProgramLexer(this.inputStream);
		this.tokenStream = new CommonTokenStream(this.lexer);
		this.parser = new ProgramParser(this.tokenStream);
	}
}

class Error {
	line: number;
	column: number;
	msg: string;

	constructor(line: number, column: number, msg: string) {
		this.line = line;
		this.column = column;
		this.msg = msg;
	}
}

class ErrorListener implements ANTLRErrorListener<AntlrToken> {
	errorList: Error[] = []
	
	syntaxError(recognizer: Recognizer<AntlrToken, any>, offendingSymbol: AntlrToken | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
		this.errorList.push(new Error(line, charPositionInLine, msg));
	}
}

/**
 * Antlr lexer returns token types as numbers
 * This converts a type number into textual token type like "META"
 */
export function antlrTypeNumToString(num: number): string {
	return ProgramLexer.ruleNames[num - 1]
}

let tokenTypes: Set<string> | undefined = undefined

export function getTokenTypes(): Set<string> {
	if (!tokenTypes) {
		tokenTypes = new Set()
		const tokensPath = path.join(__dirname, "../resources/ProgramLexer.tokens")
		const text = fs.readFileSync(tokensPath, {encoding: 'utf-8'})
		text.split('\n').forEach(elem => {
			if (elem[0] != "\'") {
				const pair = elem.split('=')
				tokenTypes!.add(pair[0])
			}
		})
	}

	return tokenTypes
}

export function tokenize(input: string): AntlrToken[] {
	const processor = new Processor(input)
	processor.tokenStream.fill()
	return processor.tokenStream.getTokens()
}

export function getParserErrors(input: string): Error[] {
	let processor = new Processor(input);
	let errorListener = new ErrorListener();
	processor.parser.addErrorListener(errorListener);
	processor.parser.program();
	return errorListener.errorList;
}