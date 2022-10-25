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

let typesToNames: Map<String, String> | undefined

function getTokensNames(path: string): Map<string, string> {
    var type2name = new Map<string, string>();
    var text = fs.readFileSync(path, {encoding: 'utf-8'});
    var tokens = text.split("\n");
    tokens.forEach((element) => {
        if(element[0] != '\'' && element.length > 1) {
            var pair = element.split("=");
            type2name.set(pair[1], pair[0]);
        }
    })
    return type2name;
}

let tokenTypes: { type: string, num: number }[] | undefined = undefined

export function getTokenTypes(): { type: string, num: number }[] {
	if (!tokenTypes) {
		tokenTypes = []
		const tokensPath = path.join(__dirname, "../resources/ProgramLexer.tokens")
		const text = fs.readFileSync(tokensPath, {encoding: 'utf-8'})
		text.split('\n').forEach(elem => {
			if (elem[0] != "\'") {
				const pair = elem.split('=')
				tokenTypes!.push({ type: pair[0], num: parseInt(pair[1]) })
			}
		})
	}
	
	return tokenTypes
}

export type Token = {
	line: number
	start: number
	length: number
	tokenType: number
	tokenModifier: number
}

export function tokenize(input: string): Token[] {
	// if (!typesToNames) {
		// typesToNames = getTokensNames(path.join(__dirname, "../resources/ProgramLexer.tokens"))
	// }
	// const type2name = typesToNames // avoid using bangs to prove that `typesToNames` is defined
	const processor = new Processor(input);
	const tokenList: Token[] = [];
	processor.tokenStream.fill();
	const antlrTokens = processor.tokenStream.getTokens();
	antlrTokens.forEach((element: AntlrToken) => {
		tokenList.push({
			line: element.line,
			start: element.startIndex,
			length: element.stopIndex - element.startIndex + 1,
			tokenType: element.type,
			tokenModifier: 0,
		});
	});

	return tokenList;
}

export function getParserErrors(input: string): Error[] {
	let processor = new Processor(input);
	let errorListener = new ErrorListener();
	processor.parser.addErrorListener(errorListener);
	processor.parser.program();
	return errorListener.errorList;
}