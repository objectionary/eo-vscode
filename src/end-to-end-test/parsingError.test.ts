// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as vscode from "vscode";
import * as assert from "assert";
import { getDocUri, activate } from "./helper";

/**
 * Builds a VSCode.Range from the input line and column numbers
 * @param sLine - Start line
 * @param sChar - Start column
 * @param eLine - End line
 * @param eChar - End column
 * @returns - vscode.Range
 */
function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
    const start = new vscode.Position(sLine, sChar);
    const end = new vscode.Position(eLine, eChar);

    return new vscode.Range(start, end);
}

/**
 * For each diagnostic received, compares it with the expected ones
 * @param docUri - Document's Uri
 * @param expectedDiagnostics - Array of the expected vscode.Diagnostics
 * @returns {void}
 */
async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
    await activate(docUri);

    const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

    assert.strictEqual(actualDiagnostics.length, expectedDiagnostics.length);

    expectedDiagnostics.forEach((expectedDiagnostic, i) => {
        const actualDiagnostic = actualDiagnostics[i];

        assert.strictEqual(actualDiagnostic.message, expectedDiagnostic.message);
        assert.deepStrictEqual(actualDiagnostic.range, expectedDiagnostic.range);
        assert.strictEqual(actualDiagnostic.severity, expectedDiagnostic.severity);
    });
}


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
            }
        ]);
    });
});
