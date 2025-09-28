import { antlrTypeNumToString, getTokenTypes, tokenize, getParserErrors, resetTokenCache, buildTokenSetAndMap } from "../parser";
import * as fs from "fs";
import * as path from "path";

describe("Parser module", () => {
    test("Gets a EO grammar token name from an ANTLR token number", () => {
        expect(antlrTypeNumToString(1)).toBe("COMMENTARY");
    });

    test("Retrieves all token type names as defined in EO grammar", () => {
        const types = getTokenTypes();

        expect(types.size).toBe(31);
        expect(types.has("COMMENTARY")).toBeTruthy();
        expect(types.has("TEXT")).toBeTruthy();
        expect(types.has("TAB")).toBeFalsy();
        expect(types.has("UNTAB")).toBeFalsy();
        expect(types.has("Q")).toBeFalsy();
    });

    test("parses valid code", () => {
        const errors = getParserErrors(
            '# test.\n[] > test\n  42 > @\n  xyz > t\n    "hello, world"\n  bar > foo\n'
        );

        expect(errors.length).toBe(0);
    });

    test("detects parsing errors", () => {
        const errors = getParserErrors("-- broken syntax --");

        expect(errors.length).toBe(1);
    });

    test("parses fibonacci program from file", () => {
        const programPath = path.join(__dirname, "../../testFixture", "fibonacci.eo");
        const program = fs.readFileSync(programPath, "utf8");
        const errors = getParserErrors(program);

        expect(errors.length).toBe(0);
    });

    test("we expect buildTokenSetAndMap to throw", () => {
        resetTokenCache();
        const location = path.join(__dirname, "none-existing-path", "pathTo.tokens");

        expect(() => buildTokenSetAndMap(location)).toThrow();
    });
});
