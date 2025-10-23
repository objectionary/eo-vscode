// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import { plistToJson } from "../src/lib/plistToJson";

jest.mock("fs");
const mockedFs = jest.mocked(fs);

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

const expectedJsonOutput = {
  name: "Test Language",
  scopeName: "source.test",
  fileTypes: ["test"],
  patterns: [
    {
      name: "comment.line.test",
      match: "#.*$",
    },
  ],
};

describe("plistToJson tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should convert valid PLIST to JSON", () => {
    mockedFs.readFileSync.mockReturnValue(validPlistContent);
    const inputPath = "/test/input.tmLanguage";
    const outputPath = "/test/output.json";

    plistToJson(inputPath, outputPath);

    expect(mockedFs.readFileSync).toHaveBeenCalledWith(inputPath, "utf-8");
    expect(mockedFs.writeFileSync).toHaveBeenCalledWith(
      outputPath,
      JSON.stringify(expectedJsonOutput, null, 2)
    );
  });

  it("should throw error for invalid PLIST content", () => {
    mockedFs.readFileSync.mockReturnValue("This is not valid XML at all!");

    expect(() =>
      plistToJson("/test/invalid.tmLanguage", "/test/output.json")
    ).toThrow("Failed to convert syntax file:");
  });

  it("should throw error for non-existent input file", () => {
    mockedFs.readFileSync.mockImplementation(() => {
      throw new Error("ENOENT: no such file or directory");
    });

    expect(() =>
      plistToJson("/test/nonexistent.tmLanguage", "/test/output.json")
    ).toThrow(
      "Failed to convert syntax file: ENOENT: no such file or directory"
    );
  });

  it("should handle non-Error objects thrown", () => {
    mockedFs.readFileSync.mockImplementation(() => {
      throw "ENOENT: no such file or directory";
    });

    expect(() =>
      plistToJson("/test/nonexistent.tmLanguage", "/test/output.json")
    ).toThrow(
      "Failed to convert syntax file: ENOENT: no such file or directory"
    );
  });
});
