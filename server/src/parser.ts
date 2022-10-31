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
 * A map from EO's g4 grammar token types into
 * token types supported by VS Code
 * 
 * Needs update with a proper, fine-tuned mapping
 * 
 * List of VS Code's token types:
 * [
 * 	 'namespace',     'type',
 * 	 'class',         'enum',
 * 	 'interface',     'struct',
 * 	 'typeParameter', 'parameter',
 * 	 'variable',      'property',
 * 	 'enumMember',    'event',
 * 	 'function',      'method',
 * 	 'macro',         'keyword',
 * 	 'modifier',      'comment',
 * 	 'string',        'number',
 * 	 'regexp',        'operator'
 * ]
 */
const tokenTypeMap : Map<string, string> = new Map()
tokenTypeMap.set('COMMENT', 'comment')
tokenTypeMap.set('META', 'macro')
tokenTypeMap.set('ROOT', 'keyword')
tokenTypeMap.set('HOME', 'keyword')
tokenTypeMap.set('STAR', 'operator')
tokenTypeMap.set('DOTS', 'operator')
tokenTypeMap.set('CONST', 'keyword')
tokenTypeMap.set('SLASH', 'operator')
tokenTypeMap.set('COLON', 'operator')
tokenTypeMap.set('COPY', 'class')
tokenTypeMap.set('ARROW', 'method')
tokenTypeMap.set('VERTEX', 'class')
tokenTypeMap.set('SIGMA', 'method')
tokenTypeMap.set('XI', 'method')
tokenTypeMap.set('PLUS', 'operator')
tokenTypeMap.set('MINUS', 'operator')
tokenTypeMap.set('QUESTION', 'operator')
// tokenTypeMap.set('SPACE', '')
// tokenTypeMap.set('DOT', '')
// tokenTypeMap.set('LSQ', '')
// tokenTypeMap.set('RSQ', '')
// tokenTypeMap.set('LB', '')
// tokenTypeMap.set('RB', '')
tokenTypeMap.set('AT', 'method')
tokenTypeMap.set('RHO', 'method')
tokenTypeMap.set('HASH', 'keyword')
// tokenTypeMap.set('EOL', '')
tokenTypeMap.set('BYTES', 'number')
tokenTypeMap.set('BOOL', 'variable')
tokenTypeMap.set('STRING', 'string')
tokenTypeMap.set('INT', 'number')
tokenTypeMap.set('FLOAT', 'number')
tokenTypeMap.set('HEX', 'number')
tokenTypeMap.set('NAME', 'variable')
tokenTypeMap.set('TEXT', 'string')
// tokenTypeMap.set('BAD_CHARACTER', '')

let tokenTypes: Set<string> | undefined = undefined

export function getTokenTypes(): Set<string> {
	if (!tokenTypes) {
		tokenTypes = new Set()
		const tokensPath = path.join(__dirname, "../resources/ProgramLexer.tokens")
		const text = fs.readFileSync(tokensPath, {encoding: 'utf-8'})
		text.split('\n').forEach(elem => {
			if (elem[0] != "\'") {
				const pair = elem.split('=')
				const type = tokenTypeMap.get(pair[0])
				if (type) {
					tokenTypes!.add(type)
				}
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

// FIXME: delete this
export function devTokenize(input: string) {
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