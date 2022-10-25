import { ClientCapabilities } from 'vscode-languageserver'

export class Capabilities
{
	hasConfigurationCapability: boolean
	hasWorkspaceFolderCapability: boolean
	hasDiagnosticRelatedInformationCapability: boolean
	hasDocumentSemanticTokensCapability: boolean

	constructor () {
		this.hasConfigurationCapability = false
		this.hasWorkspaceFolderCapability = false
		this.hasDiagnosticRelatedInformationCapability = false
		this.hasDocumentSemanticTokensCapability = false
	}

	initialize (capabilities: ClientCapabilities) {
		// Does the client support the `workspace/configuration` request?
		// If not, we will fall back using global settings
		this.hasConfigurationCapability = !!(capabilities.workspace?.configuration);
		this.hasWorkspaceFolderCapability = !!(capabilities.workspace?.workspaceFolders);
		this.hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument?.publishDiagnostics?.relatedInformation);
		this.hasDocumentSemanticTokensCapability = !!(capabilities.textDocument?.semanticTokens);
	}
}
