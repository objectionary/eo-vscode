// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import * as https from "https";
import { fetchSyntaxFile } from "../src/lib/fetchSyntaxFile";
import path from "path";

jest.mock("https");
const url = "https://example.com/syntax.tmLanguage";
const home = path.resolve("temp/fetchSyntaxFile");
const mockedHttps = jest.mocked(https);
const mockRequest = { on: jest.fn().mockReturnThis() };

const plist = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<dict>
    <key>Key</key>
    <string>Value</string>
</dict>`;

describe("fetchSyntaxFile", () => {
  beforeAll(() => {
    fs.rmSync(home, { recursive: true, force: true });
    fs.mkdirSync(path.resolve(home, "download"), { recursive: true });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should download file successfully from valid URL", async () => {
    const output = path.resolve(home, "download/valid.tmLanguage");
    const mockResponse = { statusCode: 200, pipe: jest.fn(), on: jest.fn() };
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(mockResponse));
      }
      return mockRequest as any;
    });
    mockResponse.pipe.mockImplementation((file: fs.WriteStream) => {
      file.write(plist);
      file.end();
      return file;
    });
    await expect(fetchSyntaxFile(url, output)).resolves.not.toThrow();
    expect(fs.existsSync(output)).toBe(true);
  });

  it("should reject on 404 status code", async () => {
    const output = path.resolve(home, "download/not-found.tmLanguage");
    const mockResponse = { statusCode: 404, pipe: jest.fn(), on: jest.fn() };
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(mockResponse));
      }
      return mockRequest as any;
    });
    await expect(fetchSyntaxFile(url, output)).rejects.toThrow(/404/);
  });

  it("should reject on network error", async () => {
    const output = path.resolve(home, "download/network-error.tmLanguage");
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      process.nextTick(() => {
        const errorCallback = mockRequest.on.mock.calls.find(
          (call) => call[0] == "error"
        )?.[1];
        errorCallback(new Error("Network error"));
      });
      return mockRequest as any;
    });
    await expect(fetchSyntaxFile(url, output)).rejects.toThrow();
  });

  it("should rejcect on filestream error.", async () => {
    const output = path.resolve(home, "download/filestream-error.tmLanguage");
    fs.mkdirSync(output);
    const mockResponse = { statusCode: 200, pipe: jest.fn(), on: jest.fn() };
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(mockResponse));
      }
      return mockRequest as any;
    });
    await expect(fetchSyntaxFile(url, output)).rejects.toThrow();
  });
});
