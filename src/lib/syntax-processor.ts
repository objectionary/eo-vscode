// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import * as path from "path";
import * as fs from "fs";
import { plistToJson } from "./plistToJson";
import { fetchSyntaxFile } from "./fetchSyntaxFile";

/**
 * Downloads a syntax file from URL and converts it to JSON format
 *
 * @description
 * This script performs two main operations:
 * 1. Downloads a syntax file from the provided URL to a 'download' directory
 * 2. Converts the downloaded file from PLIST (XML) to JSON format in an 'out' directory
 *
 * @usage
 * node syntax-processor.js <url>
 *
 * @example
 * node syntax-processor.js https://example.com/syntaxes/example.tmLanguage
 *
 * @throws Will exit with code 1 if URL is not provided, download fails, or conversion fails
 */
async function run(): Promise<void> {
  const [url] = process.argv.slice(2);
  if (!url) {
    console.error("Usage: node syntax-processor.js <url>");
    console.error("Please provide a URL to the syntax file");
    process.exit(1);
  }
  const name = path.basename(url);
  const input = path.resolve("download");
  const output = path.resolve("out");
  try {
    if (!fs.existsSync(input)) {
      fs.mkdirSync(input, { recursive: true });
    }
    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }
  } catch (error) {
    console.error("Failed to create directories:", error);
    process.exit(1);
  }
  const tmLanguage = path.join(input, name);
  const json = path.join(output, `${name}.json`);
  console.log(`Downloading from: ${url}`);
  try {
    await fetchSyntaxFile(url, tmLanguage);
    console.log(`✓ Successfully downloaded: ${name}`);
  } catch (error) {
    console.error("✗ Download failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
  console.log(`Converting to JSON: ${name}`);
  try {
    plistToJson(tmLanguage, json);
    console.log(`✓ Successfully converted: ${path.basename(json)}`);
    console.log(`Output file: ${json}`);
  } catch (error) {
    console.error("✗ Convert failed:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
  console.log("✓ Process completed successfully!");
}

run();
