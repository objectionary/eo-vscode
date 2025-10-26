// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import * as https from "https";

/**
 * Downloads a syntax file from the specified URL and saves it to the output path
 *
 * @param url - The URL of the syntax file to download
 * @param output - The local file path where the downloaded file will be saved
 * @returns A Promise that resolves when the download completes successfully,
 *          or rejects if an error occurs during download
 *
 * @throws {Error} When the HTTP response status code is not 200 (OK)
 * @throws {Error} When network errors or file system errors occur
 *
 * @example
 * ```typescript
 * // Download a syntax file and handle the result
 * fetchSyntaxFile('https://example.com/syntax.xml', './syntaxes/syntax.tmLanguage')
 *   .then(() => console.log('Download completed'))
 *   .catch(error => console.error('Download failed:', error));
 * ```
 */

export function fetchSyntaxFile(url: string, output: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download: ${response.statusCode}`));
          return;
        }
        const stream = fs.createWriteStream(output);
        stream.on("finish", () => {
          stream.close();
          resolve();
        });
        stream.on("error", (err) => {
          reject(err);
        });
        response.pipe(stream);
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}
