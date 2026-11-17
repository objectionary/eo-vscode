// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import { syntaxFileName } from "../src/lib/syntaxFileName";

describe("syntaxFileName", () => {
  it("returns plain file name", () => {
    expect(syntaxFileName("https://x.org/a/grammar.tmLanguage")).toBe("grammar.tmLanguage");
  });
  it("ignores query string", () => {
    expect(syntaxFileName("https://x.org/grammar.tmLanguage?ref=main")).toBe("grammar.tmLanguage");
  });
  it("ignores fragment", () => {
    expect(syntaxFileName("https://x.org/grammar.tmLanguage?a=b#top")).toBe("grammar.tmLanguage");
  });
  it("rejects url without file name", () => {
    expect(() => syntaxFileName("https://x.org/")).toThrow();
  });
  it("rejects encoded traversal", () => {
    expect(() => syntaxFileName("https://x.org/%2e%2e")).toThrow();
  });
});
