// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import * as vscode from "vscode";
import * as assert from "assert";
import * as fs from "fs";
import { getDocUri, getDocPath, activate } from "./helper";

/**
 * Checks if the semantic tokens returned by the Semantic Tokens Provider
 * are exactly the same as expected
 * @param docUri - Document's Uri
 * @param expectedSemanticTokens - Expected semantic tokens from the document
 * @returns {void}
 */
async function testSemanticHighlight(docUri: vscode.Uri, expectedSemanticTokens: string[]) {
    await activate(docUri);

    const actualSemanticTokens = (await vscode.commands.executeCommand(
        "vscode.provideDocumentSemanticTokens",
        docUri
    )) as vscode.SemanticTokens;

    assert.ok(actualSemanticTokens, "Semantic token provider must return tokens");
    assert.deepStrictEqual(
        Array.from(actualSemanticTokens.data, token => token.toString()),
        expectedSemanticTokens
    );
}

suite("Semantic Highlighting", () => {
    const docUri = getDocUri("semanticHighlighting.eo");

    test("Performs semantic highlighting in document", async () => {
        const targetTokens = fs.readFileSync(getDocPath("semanticHighlightingTarget.txt"), "utf8");
        const targetTokensArray = targetTokens.trimEnd().split(/\r?\n/);

        await testSemanticHighlight(docUri, targetTokensArray);
    });
});
