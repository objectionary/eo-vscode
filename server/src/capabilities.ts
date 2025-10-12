// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

/**
 * Defines the capabilities of the Language Server
 * @module Capabilities
 */

import { ClientCapabilities } from "vscode-languageserver";
export class Capabilities {
    hasConfigurationCapability: boolean;
    hasWorkspaceFolderCapability: boolean;
    hasDiagnosticRelatedInformationCapability: boolean;
    hasDocumentSemanticTokensCapability: boolean;

    constructor() {
        this.hasConfigurationCapability = false;
        this.hasWorkspaceFolderCapability = false;
        this.hasDiagnosticRelatedInformationCapability = false;
        this.hasDocumentSemanticTokensCapability = true;
    }

    initialize(capabilities: ClientCapabilities) {

        // Does the client support the `workspace/configuration` request?
        // If not, we will fall back using global settings
        this.hasConfigurationCapability = !!(capabilities.workspace?.configuration);
        this.hasWorkspaceFolderCapability = !!(capabilities.workspace?.workspaceFolders);
        this.hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument?.publishDiagnostics?.relatedInformation);
        this.hasDocumentSemanticTokensCapability = !!(capabilities.textDocument?.semanticTokens);
    }
}
