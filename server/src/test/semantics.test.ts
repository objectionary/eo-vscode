import { SemanticTokensProvider } from "../semantics";
import { SemanticTokensClientCapabilities } from "vscode-languageserver/node.js";
import * as fs from "fs";
import * as path from "path";
import { TextDocument } from "vscode-languageserver-textdocument";

describe("Semantics module", () => {
    let provider: SemanticTokensProvider;
    let clientCapabilities: SemanticTokensClientCapabilities;

    /**
     *
     * @param p
     */
    function getDocPath(p: string) {
        return path.resolve(__dirname, "../../testFixture", p);
    }

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
        const expectedTokens = ["comment", "macro", "keyword", "operator", "class", "method", "number", "string", "variable"];

        expect(semanticTokensLegend.size).toBe(9);
        expectedTokens.forEach(token => expect(semanticTokensLegend.has(token)).toBeTruthy());
    });

    test("Tokenize returns all semantic tokens", () => {
        const docPath = getDocPath("correctCode.eo");
        const content = fs.readFileSync(docPath).toString();
        const textDocument = TextDocument.create(docPath, "eo", 0, content);
        const actualTokens = provider.tokenize(textDocument);

        const filePathTokens = path.resolve(__dirname, "../../testFixture/correctCodeSemanticTokens.txt");
        const expectedText = fs.readFileSync(filePathTokens).toString();
        const expectedTokensString = expectedText.split("\n");
        const expectedTokens = expectedTokensString.map(item => item.split(" "));

        expect(actualTokens.length).toBe(22);
        actualTokens.forEach((item, i) => {
            expect(item.line.toString()).toBe(expectedTokens[i][0]);
            expect(item.start.toString()).toBe(expectedTokens[i][1]);
            expect(item.length.toString()).toBe(expectedTokens[i][2]);
            expect(item.tokenType.toString()).toBe(expectedTokens[i][3]);
            expect(item.tokenModifier.toString()).toBe(expectedTokens[i][4]);
        });
    });
});
