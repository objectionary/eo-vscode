import { SemanticTokensProvider } from "../semantics";
import { SemanticTokensBuilder, SemanticTokensClientCapabilities } from "vscode-languageserver/node.js";
import * as fs from "fs";
import * as path from "path";
import { TextDocument } from "vscode-languageserver-textdocument";

/**
 * Return the path to the document
 * @param p - Document's name
 * @returns - Path to document
 */
function getDocPath(p: string) {
    return path.resolve(__dirname, "../../testFixture", p);
}

describe("Semantics module", () => {
    let provider: SemanticTokensProvider;
    let clientCapabilities: SemanticTokensClientCapabilities;

    beforeEach(() => {
        clientCapabilities = {
            dynamicRegistration: true,
            tokenTypes: [
                "namespace", "type",
                "class", "enum",
                "interface", "struct",
                "typeParameter", "parameter",
                "variable", "property",
                "enumMember", "event",
                "function", "method",
                "macro", "keyword",
                "modifier", "comment",
                "string", "number",
                "regexp", "operator"
            ],
            tokenModifiers: [
                "declaration",
                "definition",
                "readonly",
                "static",
                "deprecated",
                "abstract",
                "async",
                "modification",
                "documentation",
                "defaultLibrary"
            ],
            formats: [],
            requests: { range: true, full: { delta: true } },
            multilineTokenSupport: false,
            overlappingTokenSupport: false
        };
        provider = new SemanticTokensProvider(clientCapabilities);
    });

    test("Compute Legend obtains all used VSCode token types", () => {
        const semanticTokensLegend = new Set<string>(provider.computeLegend(clientCapabilities).tokenTypes);
        const expectedTokens = ["comment", "macro", "keyword", "operator", "method", "number", "string", "variable"];

        expect(semanticTokensLegend.size).toBe(8);
        expectedTokens.forEach(token => expect(semanticTokensLegend.has(token)).toBeTruthy());
    });

    test("Tokenize returns all semantic tokens", () => {
        const textDocument = TextDocument.create("foo.eo", "eo", 0, "# test.\n[] > test\n");
        const actualTokens = provider.tokenize(textDocument);

        expect(actualTokens.length).toBe(3);
    });

    test("we expect to get uri from tokenBuilders Map by executing getTokenBuilder method", () => {
        const document = TextDocument.create("this/is/the/uri", "eo", 0, "# test.\n[] > test\n");

        provider.getTokenBuilder(document);
        expect(provider.tokenBuilders.has("this/is/the/uri")).toBeTruthy();
    });

    test("we expect populateBuilder calls tokenize method and correctly populate the builder with fields", () => {
        const document = TextDocument.create("foo.eo", "eo", 0, "# test.\n[] > test\n");
        const builder = new SemanticTokensBuilder();
        const builderSpy = jest.spyOn(builder, "push");
        const tokenizeSpy = jest.spyOn(provider, "tokenize");

        provider.populateBuilder(builder, document);
        expect(tokenizeSpy).toHaveBeenCalledWith(document);
        expect(builderSpy).toHaveBeenCalledTimes(3);
        expect(builderSpy).toHaveBeenNthCalledWith(1, 0, 0, 7, 0, 0);
        expect(builderSpy).toHaveBeenNthCalledWith(2, 1, 3, 1, 7, 0);
        expect(builderSpy).toHaveBeenNthCalledWith(3, 1, 5, 4, 19, 0);
        tokenizeSpy.mockRestore();
        builderSpy.mockRestore();
    });

    test("we expect provideSemanticTokens to clear the builder, populateBuilder call,return build() call", () => {
        const document = TextDocument.create("foo.eo", "eo", 0, "# test.\n[] > test\n");
        const builder = provider.getTokenBuilder(document);
        const buildCallSpy = jest.spyOn(builder, "build");
        const populateBuilderSpy = jest.spyOn(provider, "populateBuilder");
        const builderSpy = jest.spyOn(builder, "previousResult");

        provider.provideSemanticTokens(document);
        expect(builderSpy).toHaveBeenCalledWith("nonexistent id");
        expect(populateBuilderSpy).toHaveBeenCalledWith(builder, document);
        expect(buildCallSpy).toHaveBeenCalled();
        buildCallSpy.mockRestore();
        populateBuilderSpy.mockRestore();
        builderSpy.mockRestore();
    });

    test("we expect provideDeltas to renew the id, populateBuilder call,return buildEdits() call", () => {
        const document = TextDocument.create("test.eo", "eo", 0, "# test.\n[] > eo\n");
        const builder = provider.getTokenBuilder(document);
        const builderSpy = jest.spyOn(builder, "previousResult");
        const populateBuilderSpy = jest.spyOn(provider, "populateBuilder");
        const buildCallSpy = jest.spyOn(builder, "buildEdits");

        provider.provideDeltas(document);
        expect(builderSpy).toHaveBeenCalledWith(expect.any(String));
        expect(populateBuilderSpy).toHaveBeenCalledWith(builder, document);
        expect(buildCallSpy).toHaveBeenCalled();
        buildCallSpy.mockRestore();
        populateBuilderSpy.mockRestore();
        builderSpy.mockRestore();
    });
});
