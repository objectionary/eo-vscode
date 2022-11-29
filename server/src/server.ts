/**
 * The Server Module for the extension.
 * 
 * @module serverModule
 */

import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	TextDocumentSyncKind,
	InitializeResult,
	SemanticTokensRegistrationOptions,
	SemanticTokensRegistrationType
} from 'vscode-languageserver/node.js';

import {
	TextDocument,
} from 'vscode-languageserver-textdocument';

import { Capabilities } from './capabilities';
import { SemanticTokensProvider } from './semantics';
import { getParserErrors } from './parser';

import { DefaultSettings } from './defaultSettings';

/**
 * Connection with the server, using Node's IPC as a transport.
 * Also includes all preview / proposed LSP features.
 */
const connection = createConnection(ProposedFeatures.all);

/**
 * Simple text document manager.
 */
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

/**
 * Client capabilities manager, to define what is and is not able to do.
 */
const clientCapabilities = new Capabilities();

/**
 * Provider of the semantic highlighting capability of the language server.
 */
let semanticTokensProvider: SemanticTokensProvider;

/**
 * Defines procedures to be executed on the initialization process
 * of the connection with the client
 */
connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	clientCapabilities.initialize(capabilities);
	semanticTokensProvider = new SemanticTokensProvider(params.capabilities.textDocument!.semanticTokens!);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental
		}
	};
	if (clientCapabilities.hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

/**
 * Defines procedures to be executed once initialization process
 * of the connection with the client has concluded.
 * 
 * Registers the following possible capabilities of the client:
 * Configuration, Workspace Folder and Document Semantic Tokens
 */
connection.onInitialized(() => {
	if (clientCapabilities.hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (clientCapabilities.hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
	if (clientCapabilities.hasDocumentSemanticTokensCapability) {
		const registrationOptions: SemanticTokensRegistrationOptions = {
			documentSelector: null,
			legend: semanticTokensProvider.legend,
			range: false,
			full: {
				delta: true
			}
		};
		connection.client.register(SemanticTokensRegistrationType.type, registrationOptions);
	}
});


/**
 * Settings of the Language Server
 */
const defaultSettings: DefaultSettings = { maxNumberOfProblems: 1000 };

/**
 * The global settings, used when the `workspace/configuration` request is not supported by the client.
 */
let globalSettings: DefaultSettings = defaultSettings;

/**
 * Cache for the settings of all open documents
 */
const documentSettings: Map<string, Thenable<DefaultSettings>> = new Map();

/**
 * Resets all cached document settings and revalidates all open text
 * documents with there is a change in the configuration of the client.
 */
connection.onDidChangeConfiguration(change => {
	if (clientCapabilities.hasConfigurationCapability) {
		documentSettings.clear();
	} else {
		globalSettings = <DefaultSettings>(
			(change.settings.languageServerExample || defaultSettings)
		);
	}
	documents.all().forEach(validateTextDocument);
});

/**
 * Retrieves the settings for a document 
 * 
 * @param resource  String for the scheme of the document for which to retrive its settings
 * @returns 		A Promise for the settings of the document requested
 */
function getDocumentSettings(resource: string): Thenable<DefaultSettings> {
	if (!clientCapabilities.hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

/**
 * Clears the settings cache for a closed document, once it is closed
 */
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});

/**
 * Performs the validation of a document once it is opened or its content is
 * modified.
 */
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

/**
 * Performs error checking for the given document through its parsing. Sends to VSCode
 * each problem returned by the parser up until the maximum number of problems defined
 * in the given document's settings.
 * 
 * @param textDocument Document for which to perform the validation procedure
 */
async function validateTextDocument(textDocument: TextDocument): Promise<void> {
	const settings = await getDocumentSettings(textDocument.uri);
	const text = textDocument.getText();
	const diagnostics: Diagnostic[] = [];
	const errors = getParserErrors(text);
	
	errors.forEach((error, index) => {
		if(index >= settings.maxNumberOfProblems) {
			return;
		}
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Warning,
			range: {
				start: {line: error.line - 1, character: error.column},
				end: {line: error.line - 1, character: error.column}
			},
			message: error.msg,
			source: 'ex'
		};
		diagnostics.push(diagnostic);
	});
	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

/**
 * Logs if a change in a watched document is detected
 */
connection.onDidChangeWatchedFiles(_change => {
	connection.console.log('We received an file change event');
});

/**
 * Performs semmantic highlighting for the document defined in the
 * callback parameter once the document is first opened.
 */
connection.languages.semanticTokens.on(params => {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return { data: [] };
	}
	return semanticTokensProvider.provideSemanticTokens(document);
});

/**
 * Performs semmantic highlighting for the document defined in the
 * callback parameter once the document is changed.
 */
connection.languages.semanticTokens.onDelta(params => {
	const document = documents.get(params.textDocument.uri);
	if (!document) {
		return { data: [] };
	}
	return semanticTokensProvider.provideDeltas(document, params.textDocument.uri);
});


/**
 * Make the text document manager listen on the connection
 * for open, change and close text document events
 */
documents.listen(connection);

/**
 * Listen on the connection
 */
connection.listen();
