import * as vscode from "vscode";
import * as assert from "assert";
import { getDocUri, activate } from "./helper";

suite("Parsing error checks", () => {
    
    test("No parsing errors detected", async () => {
        const docUri = getDocUri("parsingErrorFree.eo");
        await testDiagnostics(docUri, []);
    });
    
    test("Diagnoses two missing EOL errors in file", async () => {
        const docUri = getDocUri("parsingErrorTwo.eo");
        await testDiagnostics(docUri, [
            {
                message: "missing EOL at 'n'",
                range: toRange(14, 30, 14, 30), 
                severity: vscode.DiagnosticSeverity.Warning, 
                source: "ex" 
            },
            {
                message: "mismatched input ' ' expecting EOL",
                range: toRange(15, 0, 15, 0), 
                severity: vscode.DiagnosticSeverity.Warning,
                source: "ex"
            },
        ]);
    });
});

/**
 * Builds a VSCode.Range from the input line and column numbers
 * @param sLine
 * @param sChar
 * @param eLine
 * @param eChar
 */
function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
    const start = new vscode.Position(sLine, sChar);
    const end = new vscode.Position(eLine, eChar);

    return new vscode.Range(start, end);
}

/**
 * For each diagnostic received, compares it with the expected ones
 * @param docUri
 * @param expectedDiagnostics
 */
async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
    await activate(docUri);

    const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

    assert.equal(actualDiagnostics.length, expectedDiagnostics.length);

    expectedDiagnostics.forEach((expectedDiagnostic, i) => {
        const actualDiagnostic = actualDiagnostics[i];

        assert.equal(actualDiagnostic.message, expectedDiagnostic.message);
        assert.deepEqual(actualDiagnostic.range, expectedDiagnostic.range);
        assert.equal(actualDiagnostic.severity, expectedDiagnostic.severity);
    });
}
