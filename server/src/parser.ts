import * as fs from 'fs';
import * as path from 'path';
import { 
	CharStreams, 
	CommonTokenStream, 
	Token, 
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

class ErrorListener implements ANTLRErrorListener<Token> {
	errorList: Error[] = [];
	
	syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
		this.errorList.push(new Error(line, charPositionInLine, msg));
	}
}

function getTokensNames(path: string): Map<string, string> {
    const type2name = new Map<string, string>();
    const text = fs.readFileSync(path, {encoding: 'utf-8'});
    const tokens = text.split("\n");
    tokens.forEach((element: any) => {
        if(element[0] != '\'' && element.length > 1) {
            const pair = element.split("=");
            type2name.set(pair[1], pair[0]);
        }
    });
    return type2name;
}

export function getTokens(input: string): {name: string, start: number, stop: number}[] {
	const type2name = getTokensNames(path.join(__dirname, "../resources/ProgramLexer.tokens"));
	const processor = new Processor(input);
	
	const tokenList: any[] = [];
	processor.tokenStream.fill();

	const tokens = processor.tokenStream.getTokens();

	tokens.forEach((element: Token) => {
		tokenList.push({
			"length": element.stopIndex - element.startIndex + 1,
			"name": type2name.get(String(element.type)),
			"line": element.line,
			"column": element.charPositionInLine,
			"start": element.startIndex,
			"stop": element.stopIndex
		});
	});
		
	return tokenList;
}

export function getParserErrors(input: string): Error[] {
	const processor = new Processor(input);
	const errorListener = new ErrorListener();
	processor.parser.addErrorListener(errorListener);
	processor.parser.program();
	return errorListener.errorList;
}