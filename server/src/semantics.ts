import
{
	SemanticTokensBuilder,
	SemanticTokensLegend,
	SemanticTokensClientCapabilities
} from 'vscode-languageserver'
import { TextDocument } from 'vscode-languageserver-textdocument'
import { devTokenize, tokenize, getTokenTypes } from './parser'

export class SemanticTokensProvider {
	legend: SemanticTokensLegend;
	tokenBuilders: Map<string, SemanticTokensBuilder> = new Map()

	constructor(capability: SemanticTokensClientCapabilities) {
		this.legend = this.computeLegend(capability)
	}

	computeLegend(capability: SemanticTokensClientCapabilities): SemanticTokensLegend {
		const clientTokenTypes = new Set<string>(capability.tokenTypes)

		const tokenTypes: string[] = []

		getTokenTypes().forEach(type => {
			if (clientTokenTypes.has(type)) {
				tokenTypes.push(type)
			}
		})

		// console.log(tokenTypes)
		// console.log(capability.tokenTypes)
		// console.log(getTokenTypes())

		return { tokenTypes: tokenTypes, tokenModifiers: [] }
	}

	getTokenBuilder(document: TextDocument): SemanticTokensBuilder {
		let result = this.tokenBuilders.get(document.uri)
		if (!result) {
			result = new SemanticTokensBuilder()
			this.tokenBuilders.set(document.uri, result)
		}

		return result
	}

	provideSemanticTokens(document: TextDocument) {
		const builder = this.getTokenBuilder(document);
		console.log(devTokenize(document.getText()))
		tokenize(document.getText()).forEach((token) =>
		{
			builder.push(
				token.line,
				token.start,
				token.length,
				token.tokenType,
				token.tokenModifier
			)
		})
		return builder.build()
	}

	provideDeltas(document: TextDocument, resultsId: string) {
		const builder = this.getTokenBuilder(document)
		builder.previousResult(resultsId)
		tokenize(document.getText()).forEach((token) =>
		{
			builder.push(
				token.line,
				token.start,
				token.length,
				token.tokenType,
				token.tokenModifier
			)
		})
		return builder.buildEdits()
	}
}
