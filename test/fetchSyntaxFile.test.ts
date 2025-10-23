// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import * as https from "https";
import { fetchSyntaxFile } from "../src/lib/fetchSyntaxFile";

jest.mock("fs");
jest.mock("https");

const url = "https://example.com/syntax.tmLanguage";
const outputPath = "/test/syntax.tmLanguage";
const mockedFs = jest.mocked(fs);
const mockedHttps = jest.mocked(https);
const mockFileStream = { close: jest.fn(), on: jest.fn() };
const mockRequest = { on: jest.fn().mockReturnThis() };
mockedFs.createWriteStream.mockReturnValue(mockFileStream as any);

describe("fetchSyntaxFile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should download file successfully from valid URL", async () => {
    const mockResponse = { statusCode: 200, pipe: jest.fn(), on: jest.fn() };
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(mockResponse));
      }
      return mockRequest as any;
    });
    mockResponse.pipe.mockImplementation((file: any) => {
      process.nextTick(() => {
        const finishCallback = mockFileStream.on.mock.calls.find(
          (call) => call[0] === "finish"
        )?.[1];
        if (finishCallback) finishCallback();
      });
    });

    await expect(fetchSyntaxFile(url, outputPath)).resolves.not.toThrow();
    expect(mockedHttps.get).toHaveBeenCalledWith(url, expect.any(Function));
    expect(mockedFs.createWriteStream).toHaveBeenCalledWith(outputPath);
  });

  it("should reject on 404 status code", async () => {
    const mockResponse = { statusCode: 404, pipe: jest.fn(), on: jest.fn() };
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(mockResponse));
      }
      return mockRequest as any;
    });

    await expect(fetchSyntaxFile(url, outputPath)).rejects.toThrow(
      "Failed to download: 404"
    );
  });

  it("should reject on network error", async () => {
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      process.nextTick(() => {
        const errorCallback = mockRequest.on.mock.calls.find(
          (call) => call[0] == "error"
        )?.[1];
        errorCallback(new Error("Network error"));
      });
      return mockRequest as any;
    });

    await expect(fetchSyntaxFile(url, outputPath)).rejects.toThrow(
      "Network error"
    );
    expect(mockedFs.unlink).toHaveBeenCalledWith(
      outputPath,
      expect.any(Function)
    );
  });

  it("should extend network error message on cleanup failure.", async () => {
    mockedFs.unlink.mockImplementation((path: fs.PathLike, callback: any) => {
      if (typeof callback === "function") {
        process.nextTick(() => callback(new Error("File is busy or locked.")));
      }
    });
    mockedHttps.get.mockImplementation((url: any, callback: any) => {
      process.nextTick(() => {
        const errorCallback = mockRequest.on.mock.calls.find(
          (call) => call[0] == "error"
        )?.[1];
        errorCallback(new Error("Network error."));
      });
      return mockRequest as any;
    });

    await expect(fetchSyntaxFile(url, outputPath)).rejects.toThrow(
      "Network error. Also failed to cleanup: File is busy or locked."
    );
  });
});
