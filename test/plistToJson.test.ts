// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import { plistToJson } from "../src/lib/plistToJson";
import path from "path";

const validPlistContent = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>name</key>
    <string>Test Language</string>
    <key>scopeName</key>
    <string>source.test</string>
    <key>fileTypes</key>
    <array>
        <string>test</string>
    </array>
    <key>patterns</key>
    <array>
        <dict>
            <key>name</key>
            <string>comment.line.test</string>
            <key>match</key>
            <string>#.*$</string>
        </dict>
    </array>
</dict>
</plist>`;

const expectedJsonOutput = `{
  "name": "Test Language",
  "scopeName": "source.test",
  "fileTypes": [
    "test"
  ],
  "patterns": [
    {
      "name": "comment.line.test",
      "match": "#.*$"
    }
  ]
}`;

const home = path.resolve("temp/plistToJson");

describe("plistToJson tests", () => {
  beforeAll(() => {
    fs.rmSync(home, { recursive: true, force: true });
    fs.mkdirSync(path.resolve(home, "download"), { recursive: true });
    fs.mkdirSync(path.resolve(home, "out"), { recursive: true });
  });

  it("should convert valid PLIST to JSON", () => {
    const inputPath = path.resolve(home, "download/eo.tmLanguage");
    fs.writeFileSync(inputPath, validPlistContent);
    const outputPath = path.resolve(home, "out/eo.tmLanguage.json");
    plistToJson(inputPath, outputPath);
    expect(fs.existsSync(outputPath)).toBe(true);
    const actualJsonOutput = fs.readFileSync(outputPath, "utf-8");
    expect(actualJsonOutput).toBe(expectedJsonOutput);
  });

  it("should throw error for invalid PLIST content", () => {
    const inputPath = path.resolve(home, "download/invalid.tmLanguage");
    fs.writeFileSync(inputPath, "This is not valid XML at all!");
    const outputPath = path.resolve(home, "out/invalid.tmLanguage.json");
    expect(() => plistToJson(inputPath, outputPath)).toThrow();
    expect(!fs.existsSync(outputPath)).toBe(true);
  });

  it("should throw error for non-existent input file", () => {
    const inputPath = path.resolve(home, "download/non-existent.tmLanguage");
    const outputPath = path.resolve(home, "out/non-existent.tmLanguage.json");
    expect(() => plistToJson(inputPath, outputPath)).toThrow();
  });
});
