// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

/**
 * The Client Module for the extension.
 * @module ClientModule
 */

import * as path from "path";
import { workspace, ExtensionContext } from "vscode";

import {
    LanguageClient,
    LanguageClientOptions,
    ServerOptions,
    TransportKind
} from "vscode-languageclient/node";

let client: LanguageClient;

/**
 * Starts the client and, as consequence, launches the server.
 *
 * The server is implemented in node. Server options are set to
 * define the transportation protocol and debug option. Client
 * options are set to define the type of document for which the
 * extension will run.
 * @param context - ExtensionContext object used by vscode
 * @returns {void}
 */
export function activate(context: ExtensionContext) {
    const serverModule = context.asAbsolutePath(
        path.join("node_modules", "eo-lsp-server", "dist", "index.js")
    );

    // The debug options for the server
    // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
    const debugOptions = { execArgv: ["--nolazy", "--inspect=6009"] };

    // If the extension is launched in debug mode then the debug server options are used
    // Otherwise the run options are used
    const serverOptions: ServerOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: debugOptions
        }
    };

    // Options to control the language client
    const clientOptions: LanguageClientOptions = {

        // Register the server for plain text documents
        documentSelector: [{ scheme: "file", language: "eo" }],
        synchronize: {

            // Notify the server about file changes to '.clientrc files contained in the workspace
            fileEvents: workspace.createFileSystemWatcher("**/.clientrc")
        }
    };

    // Create the language client.
    client = new LanguageClient(
        "eoLanguageServer",
        "EO Language Server",
        serverOptions,
        clientOptions
    );

    // Start the client. This will also launch the server
    client.start();
}

/**
 * Stops the client execution.
 * @returns - A promise for when the client stops running if it is already
 *            running. Otherwise, returns _undefined_
 */
export function deactivate(): Thenable<void> | undefined {
    if (!client) {
        return void 0;
    }
    return client.stop();
}
