/**
 * VSCode error message
 * 
 * @module Error
 */

export class Error {
	line: number;
	column: number;
	msg: string;

	constructor(line: number, column: number, msg: string) {
		this.line = line;
		this.column = column;
		this.msg = msg;
	}
}