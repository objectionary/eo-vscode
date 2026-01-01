/* --------------------------------------------------------------------------------------------
 * SPDX-FileCopyrightText: Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
 * SPDX-License-Identifier: MIT
*/

import * as vscode from "vscode";
import * as path from "path";

export let doc: vscode.TextDocument;
export let editor: vscode.TextEditor;
export let documentEol: string;
export let platformEol: string;

/**
 * Timeout
 * @param ms - Time to sleep for in ms
 * @returns - Promise that is resolved after a timeout
 */
async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Activates the vscode.lsp-sample extension
 * @param docUri - VSCode Uri for text document
 * @returns {void}
 */
export async function activate(docUri: vscode.Uri) {

    // The extensionId is `publisher.name` from package.json
    const ext = vscode.extensions.getExtension("eolang.eo")!;

    await ext.activate();
    try {
        doc = await vscode.workspace.openTextDocument(docUri);
        editor = await vscode.window.showTextDocument(doc);
        await sleep(2000); // Wait for server activation
    } catch (e) {
        throw new Error("Fail to activate document");
    }
}

/**
 * Returns the path of a document
 * @param p - Document's name
 * @returns - Document's path
 */
export function getDocPath(p: string) {
    return path.resolve(__dirname, "../../testFixture", p);
}

/**
 * Returns document's Uri
 * @param p - Document's name
 * @returns - Document's Uri
 */
export function getDocUri(p: string) {
    return vscode.Uri.file(getDocPath(p));
}

/**
 * Setter for the test content
 * @param content - Content of the document on which to perform the testing
 * @returns - A promise that resolves with a value indicating if the edits could be applied
 */
export async function setTestContent(content: string): Promise<boolean> {
    const all = new vscode.Range(
        doc.positionAt(0),
        doc.positionAt(doc.getText().length)
    );

    return editor.edit(eb => eb.replace(all, content));
}
