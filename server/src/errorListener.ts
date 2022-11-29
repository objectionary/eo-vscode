/**
 * Provides the errors detected during the parsing of an input program.
 * 
 * @module ErrorListener
 */

import { 
	Token as AntlrToken, 
	ANTLRErrorListener,
	Recognizer,
	RecognitionException
} from 'antlr4ts';
import { Error } from './error';

export class ErrorListener implements ANTLRErrorListener<AntlrToken> {
	/**
	 * Array of errors detected during the parsing
	 */
	errorList: Error[] = [];
	
	syntaxError(recognizer: Recognizer<AntlrToken, any>, offendingSymbol: AntlrToken | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
		this.errorList.push(new Error(line, charPositionInLine, msg));
	}
}