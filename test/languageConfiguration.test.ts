// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import { readFileSync } from "fs";
import path from "path";

const config = JSON.parse(
  readFileSync(path.resolve("language-configuration.json"), "utf8")
);
const opens = (config.autoClosingPairs as { open: string }[]).map((p) => p.open);

describe("language configuration", () => {
  it("does not auto-close the apostrophe that EO has no literal for", () => {
    expect(opens).not.toContain("'");
    expect(config.surroundingPairs).not.toContainEqual(["'", "'"]);
  });

  it("does not treat braces as brackets", () => {
    expect(opens).not.toContain("{");
    expect(config.brackets).not.toContainEqual(["{", "}"]);
    expect(config.surroundingPairs).not.toContainEqual(["{", "}"]);
  });

  it("keeps square and round brackets and the double quote", () => {
    expect(opens).toEqual(expect.arrayContaining(["[", "(", "\""]));
  });

  it("increases the indent after a formation head and after a binding", () => {
    const re = new RegExp(config.indentationRules.increaseIndentPattern);
    expect(re.test("[] > app")).toBe(true);
    expect(re.test("  [x y] > foo")).toBe(true);
    expect(re.test("  QQ.io.stdout > @")).toBe(true);
    expect(re.test("  foo > bar")).toBe(true);
    expect(re.test("  stdout \"hello\"")).toBe(false);
  });

  it("decreases the indent on a blank indented line", () => {
    const re = new RegExp(config.indentationRules.decreaseIndentPattern);
    expect(re.test("    ")).toBe(true);
    expect(re.test("  foo")).toBe(false);
  });
});
