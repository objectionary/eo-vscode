// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import { readFileSync } from "fs";
import path from "path";

const manifest = JSON.parse(readFileSync(path.resolve("package.json"), "utf8"));
const lock = JSON.parse(readFileSync(path.resolve("package-lock.json"), "utf8"));

describe("extension packaging", () => {
  it("keeps the packaging CLI available only during development", () => {
    expect(manifest.dependencies).not.toHaveProperty("@vscode/vsce");
    expect(manifest.devDependencies).toHaveProperty("@vscode/vsce");
    expect(lock.packages[""].dependencies).not.toHaveProperty("@vscode/vsce");
    expect(lock.packages[""].devDependencies["@vscode/vsce"])
      .toBe(manifest.devDependencies["@vscode/vsce"]);
    expect(lock.packages["node_modules/@vscode/vsce"].dev).toBe(true);
  });

  it("contributes settings under the section the server reads", () => {
    const keys = Object.keys(manifest.contributes.configuration.properties);
    expect(keys).toEqual(["eo.limit", "eo.trace.server"]);
    expect(manifest.contributes.configuration.properties["eo.limit"].default).toBe(1000);
  });
});
