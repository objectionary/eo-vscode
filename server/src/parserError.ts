/**
 * VSCode parsing error message
 * @module ParserError
 */

export class ParserError {
    line: number;
    column: number;
    msg: string;

    /**
     * Error class constructor
     * @param line - Line number of error
     * @param column - Column number of error
     * @param msg - Error message
     * @returns - ParserError object
     */
    constructor(line: number, column: number, msg: string) {
        this.line = line;
        this.column = column;
        this.msg = msg;
    }
}
