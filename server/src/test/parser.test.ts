// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import { antlrTypeNumToString, getTokenTypes, tokenize, getParserErrors } from "../parser";
import * as fs from "fs";
import * as path from "path";

describe("Parser module", () => {
    test("Gets a EO grammar token name from an ANTLR token number", () => {
        expect(antlrTypeNumToString(1)).toBe("COMMENT");
    });

    test("Retrieves all token type names as defined in EOs grammar", () => {
        const tokenTypes = getTokenTypes();

        expect(tokenTypes.size).toBe(35);
        expect(tokenTypes.has("COMMENT")).toBeTruthy();
        expect(tokenTypes.has("TEXT")).toBeTruthy();
        expect(tokenTypes.has("Q")).toBeFalsy();
    });

    test("Retrieves all tokens from EOs code file", () => {
        const filePathCode = path.resolve(__dirname, "../../testFixture/correctCode.eo");
        const filePathTokens = path.resolve(__dirname, "../../testFixture/correctCodeTokens.txt");

        const expectedText = fs.readFileSync(filePathTokens).toString();
        const expectedTokensString = expectedText.split("\n");
        const expectedTokens = expectedTokensString.map(item => item.split(" "));

        const inputText = fs.readFileSync(filePathCode).toString();
        const actualTokens = tokenize(inputText);

        expect(actualTokens.length).toBe(22);
        actualTokens.forEach((item, i) => {
            expect(item.line.toString()).toBe(expectedTokens[i][0]);
            expect(item.charPositionInLine.toString()).toBe(expectedTokens[i][1]);
            expect(item.type.toString()).toBe(expectedTokens[i][2]);
            expect(item.startIndex.toString()).toBe(expectedTokens[i][3]);
            expect(item.stopIndex.toString()).toBe(expectedTokens[i][4]);
        });
    });

    test("No parsing error", () => {
        const filePathCode = path.resolve(__dirname, "../../testFixture/correctCode.eo");
        const inputText = fs.readFileSync(filePathCode).toString();
        const parseErrors = getParserErrors(inputText);

        expect(parseErrors.length).toBe(0);
    });

    test("One parsing error detected", () => {
        const filePathCode = path.resolve(__dirname, "../../testFixture/incorrectCode1.eo");
        const inputText = fs.readFileSync(filePathCode).toString();
        const parseErrors = getParserErrors(inputText);

        expect(parseErrors.length).toBe(1);
        expect(parseErrors[0].line).toBe(12);
        expect(parseErrors[0].column).toBe(17);
        expect(parseErrors[0].msg).toBe("missing EOL at '<EOF>'");
    });

    test("Two parsing errors detected", () => {
        const filePathCode = path.resolve(__dirname, "../../testFixture/incorrectCode2.eo");
        const inputText = fs.readFileSync(filePathCode).toString();
        const parseErrors = getParserErrors(inputText);

        expect(parseErrors.length).toBe(2);

        expect(parseErrors[0].line).toBe(15);
        expect(parseErrors[0].column).toBe(30);
        expect(parseErrors[0].msg).toBe("missing EOL at 'n'");

        expect(parseErrors[1].line).toBe(16);
        expect(parseErrors[1].column).toBe(0);
        expect(parseErrors[1].msg).toBe("mismatched input ' ' expecting EOL");
    });
});
