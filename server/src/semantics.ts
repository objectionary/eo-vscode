/**
 * Performs the semantic highlighting if the documents.
 * @module SemanticTokensProvider
 */

import {
    SemanticTokensBuilder,
    SemanticTokensLegend,
    SemanticTokensClientCapabilities
} from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { antlrTypeNumToString, tokenize, getTokenTypes } from "./parser";

/**
 * Token type that contains information about the position of the token
 * and its semantic type and modifier
 */
export type VSCodeToken = {
    line: number
    start: number
    length: number
    tokenType: number
    tokenModifier: number
}

/**
 * Responsible for dealing with semantic highlighting operations
 */
export class SemanticTokensProvider {

    /**
     * The VSCode tokens types used in the EO semantic highlighting
     */
    legend: SemanticTokensLegend;

    /**
     * Keep a separate semantic token builder per file
     * Each builder keeps track of the semantic tokens in a file
     */
    tokenBuilders: Map<string, SemanticTokensBuilder> = new Map();

    /**
     * A map from EO's g4 grammar token types into
     * token types supported by VS Code
     */
    tokenTypeMap: Map<string, string> = new Map();

    /**
     * Sets the map from EO token to VSCode token types and initializes
     * the semantic legend of Semantic Highlighter
     * @param capability - Capabilities of the semantic tokens client
     */
    constructor(capability: SemanticTokensClientCapabilities) {
        this.setMap(); // must run before computing legend!
        this.legend = this.computeLegend(capability);
    }

    /**
     * Initializes the map from EO's g4 grammar token types into
     * token types supported by VS Code. This operation defines
     * how each token will look like in the highlighted document
     * @returns {void}
     */
    setMap() {

        /*
            List of VS Code's token types:
              [
                'namespace',     'type',
                  'class',         'enum',
                  'interface',     'struct',
                  'typeParameter', 'parameter',
                  'variable',      'property',
                  'enumMember',    'event',
                  'function',      'method',
                  'macro',         'keyword',
                  'modifier',      'comment',
                  'string',        'number',
                  'regexp',        'operator'
            ]
        */
        this.tokenTypeMap.set("COMMENT", "comment");
        this.tokenTypeMap.set("META", "macro");
        this.tokenTypeMap.set("ROOT", "keyword");
        this.tokenTypeMap.set("HOME", "keyword");
        this.tokenTypeMap.set("STAR", "operator");
        this.tokenTypeMap.set("DOTS", "operator");
        this.tokenTypeMap.set("CONST", "keyword");
        this.tokenTypeMap.set("SLASH", "operator");
        this.tokenTypeMap.set("COLON", "operator");
        this.tokenTypeMap.set("COPY", "class");
        this.tokenTypeMap.set("ARROW", "method");
        this.tokenTypeMap.set("VERTEX", "class");
        this.tokenTypeMap.set("SIGMA", "method");
        this.tokenTypeMap.set("XI", "method");
        this.tokenTypeMap.set("PLUS", "operator");
        this.tokenTypeMap.set("MINUS", "operator");
        this.tokenTypeMap.set("QUESTION", "operator");
        this.tokenTypeMap.set("AT", "method");
        this.tokenTypeMap.set("RHO", "method");
        this.tokenTypeMap.set("HASH", "keyword");
        this.tokenTypeMap.set("BYTES", "number");
        this.tokenTypeMap.set("BOOL", "number");
        this.tokenTypeMap.set("STRING", "string");
        this.tokenTypeMap.set("INT", "number");
        this.tokenTypeMap.set("FLOAT", "number");
        this.tokenTypeMap.set("HEX", "number");
        this.tokenTypeMap.set("NAME", "variable");
        this.tokenTypeMap.set("TEXT", "string");
    }

    /**
     * For every token in EO's grammar, checks if it is mapped to VSCode token types
     * and, if so, add that token type to the Semantic Tokens Legend of the grammar.
     * @param capability - Capabilities of the semantic highlighting feature
     * @returns - Semantic Tokens Legend for the grammar
     */
    computeLegend(capability: SemanticTokensClientCapabilities): SemanticTokensLegend {
        const clientTokenTypes = new Set<string>(capability.tokenTypes);

        const tokenTypes: string[] = [];

        getTokenTypes().forEach(el => {
            const type = this.tokenTypeMap.get(el) || "";

            if (clientTokenTypes.has(type)) {
                tokenTypes.push(type);
            }
        });

        return { tokenTypes, tokenModifiers: [] };
    }

    /**
     * Obtains the semantic tokens for a given text document.
     *
     * Firstly, the document is tokenized through the EO's parser. Secondly,
     * each token receives a VSCode token type depending on which grammar token
     * it is.
     * @param document - Text Document to be semanticaly tokenized
     * @returns - Array of VSCode tokens present in the document
     */
    tokenize(document: TextDocument): VSCodeToken[] {
        const tokens: VSCodeToken[] = [];
        const antlrTokens = tokenize(document.getText());

        antlrTokens.forEach(tk => {
            const vscodeTokenType = this.tokenTypeMap.get(antlrTypeNumToString(tk.type));
            const legendNum = vscodeTokenType ? this.legend.tokenTypes.indexOf(vscodeTokenType) : -1;

            tokens.push({
                line: tk.line - 1,
                start: tk.charPositionInLine,
                length: tk.stopIndex - tk.startIndex + 1,
                tokenType: legendNum,
                tokenModifier: 0
            });
        });
        return tokens;
    }

    /**
     * Creates a new Semantic Tokens Builder for the given document if it does not
     * already have one, and caches it.
     * @param document - Text document for which to create the new Semantic Tokens Builder
     * @returns - The Semantic Tokens Builder for the given document
     */
    getTokenBuilder(document: TextDocument): SemanticTokensBuilder {
        let result = this.tokenBuilders.get(document.uri);

        if (!result) {
            result = new SemanticTokensBuilder();
            this.tokenBuilders.set(document.uri, result);
        }

        return result;
    }


    /**
     * Pushes into a SemanticTokensBuilder the semantic tokens obtained from a text document
     * @param builder - SemanticTokensBuilder to be populated with the semantic tokens of the
     *                  given document
     * @param document - TextDocument to be semanticaly highlighted
     * @returns {void}
     */
    populateBuilder(builder: SemanticTokensBuilder, document: TextDocument) {
        this.tokenize(document).forEach(token => {
            builder.push(
                token.line,
                token.start,
                token.length,
                token.tokenType,
                token.tokenModifier
            );
        });
    }

    /**
     * Returns a SemanticTokensBuilder for a new text document
     * @param document - TextDocument to be semanticaly highlighted
     * @returns - SemanticTokensBuilder containing the semantic
     *            token of the given document
     */
    provideSemanticTokens(document: TextDocument) {
        const builder = this.getTokenBuilder(document);

        this.populateBuilder(builder, document);
        return builder.build();
    }

    /**
     * Returns a SemanticTokensBuilder for a modified text document
     * @param document - TextDocument to be semanticaly highlighted
     * @param resultsId - The ID of the previous semantic analysis performed
     *                    on the document
     * @returns - SemanticTokensBuilder containing the semantic
     *            token of the given document
     */
    provideDeltas(document: TextDocument, resultsId: string) {
        const builder = this.getTokenBuilder(document);

        builder.previousResult(resultsId);
        this.populateBuilder(builder, document);
        return builder.buildEdits();
    }
}
