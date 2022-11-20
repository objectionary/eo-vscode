import
{
	SemanticTokensBuilder,
	SemanticTokensLegend,
	SemanticTokensClientCapabilities
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { antlrTypeNumToString, tokenize, getTokenTypes } from './parser';

export type VSCodeToken = {
	line: number
	start: number
	length: number
	tokenType: number
	tokenModifier: number
}

export class SemanticTokensProvider {
	legend: SemanticTokensLegend;
	/**
	 * Keep a separate semantic token builder per file
	 * Each builder keeps track of
	 */
	tokenBuilders: Map<string, SemanticTokensBuilder> = new Map();
	/**
 	 * A map from EO's g4 grammar token types into
 	 * token types supported by VS Code
 	 */
	tokenTypeMap: Map<string, string> = new Map;

	constructor(capability: SemanticTokensClientCapabilities) {
		this.setMap(); // must run before computing legend!
		this.legend = this.computeLegend(capability);
	}

	setMap() {
		/*
			Needs update with a proper, fine-tuned mapping
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
		this.tokenTypeMap.set('COMMENT', 'comment');
		this.tokenTypeMap.set('META', 'macro');
		this.tokenTypeMap.set('ROOT', 'keyword');
		this.tokenTypeMap.set('HOME', 'keyword');
		this.tokenTypeMap.set('STAR', 'operator');
		this.tokenTypeMap.set('DOTS', 'operator');
		this.tokenTypeMap.set('CONST', 'keyword');
		this.tokenTypeMap.set('SLASH', 'operator');
		this.tokenTypeMap.set('COLON', 'operator');
		this.tokenTypeMap.set('COPY', 'class');
		this.tokenTypeMap.set('ARROW', 'method');
		this.tokenTypeMap.set('VERTEX', 'class');
		this.tokenTypeMap.set('SIGMA', 'method');
		this.tokenTypeMap.set('XI', 'method');
		this.tokenTypeMap.set('PLUS', 'operator');
		this.tokenTypeMap.set('MINUS', 'operator');
		this.tokenTypeMap.set('QUESTION', 'operator');
		this.tokenTypeMap.set('AT', 'method');
		this.tokenTypeMap.set('RHO', 'method');
		this.tokenTypeMap.set('HASH', 'keyword');
		this.tokenTypeMap.set('BYTES', 'number');
		this.tokenTypeMap.set('BOOL', 'variable');
		this.tokenTypeMap.set('STRING', 'string');
		this.tokenTypeMap.set('INT', 'number');
		this.tokenTypeMap.set('FLOAT', 'number');
		this.tokenTypeMap.set('HEX', 'number');
		this.tokenTypeMap.set('NAME', 'variable');
		this.tokenTypeMap.set('TEXT', 'string');
	}

	computeLegend(capability: SemanticTokensClientCapabilities): SemanticTokensLegend {
		const clientTokenTypes = new Set<string>(capability.tokenTypes);

		const tokenTypes: string[] = [];
		getTokenTypes().forEach(el => {
			const type = this.tokenTypeMap.get(el) || '';
			if (clientTokenTypes.has(type)) {
				tokenTypes.push(type);
			}
		});

		return { tokenTypes: tokenTypes, tokenModifiers: [] };
	}

	tokenize(document: TextDocument) {
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
				tokenModifier: 0,
			});
		});
		return tokens;
	}

	getTokenBuilder(document: TextDocument): SemanticTokensBuilder {
		let result = this.tokenBuilders.get(document.uri);
		if (!result) {
			result = new SemanticTokensBuilder();
			this.tokenBuilders.set(document.uri, result);
		}

		return result;
	}

	provideSemanticTokens(document: TextDocument) {
		const builder = this.getTokenBuilder(document);
		this.tokenize(document).forEach((token) =>
		{
			builder.push(
				token.line,
				token.start,
				token.length,
				token.tokenType,
				token.tokenModifier
			);
		});
		return builder.build();
	}

	provideDeltas(document: TextDocument, resultsId: string) {
		const builder = this.getTokenBuilder(document);
		builder.previousResult(resultsId);
		this.tokenize(document).forEach((token) =>
		{
			builder.push(
				token.line,
				token.start,
				token.length,
				token.tokenType,
				token.tokenModifier
			);
		});
		return builder.buildEdits();
	}
}
