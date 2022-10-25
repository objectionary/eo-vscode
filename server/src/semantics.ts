import
{
	SemanticTokensBuilder,
	SemanticTokensLegend,
	SemanticTokensClientCapabilities
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { tokenize, getTokenTypes } from './parser'

type Token =
{
	line: number;
	start: number;
	length: number;
	tokenType: number;
	tokenModifiers: number;
}

export class SemanticTokensProvider {
	legend: SemanticTokensLegend;
	tokenTypes: Map<string, number> = new Map();
	tokenModifiers:Map<string, number> = new Map();
	tokenBuilders: Map<string, SemanticTokensBuilder> = new Map();

	constructor(capability: SemanticTokensClientCapabilities) {
		this.legend = this.computeLegend(capability);
	}

	computeLegend(capability: SemanticTokensClientCapabilities): SemanticTokensLegend {
		const clientTokenTypes = new Set<string>(capability.tokenTypes);

		const _tokenTypes: string[] = [];

		getTokenTypes().forEach(({ type, num }) => {
			if (clientTokenTypes.has(type)) {
				_tokenTypes.push(type)
				this.tokenTypes.set(type, num)
			}
		})

		return { tokenTypes: _tokenTypes, tokenModifiers: [] };
	}

	getTokenBuilder(document: TextDocument): SemanticTokensBuilder {
		let result = this.tokenBuilders.get(document.uri);
		if (result !== undefined) {
			return result;
		}
		result = new SemanticTokensBuilder();
		this.tokenBuilders.set(document.uri, result);
		return result;
	}

	provideSemanticTokens(document: TextDocument) {
		const builder = this.getTokenBuilder(document);
		tokenize(document.getText()).forEach((token) =>
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
		tokenize(document.getText()).forEach((token) =>
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
