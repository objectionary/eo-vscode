// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as fs from "fs";
import * as plist from "plist";

/**
 * Converts a PLIST (XML) syntax file to JSON format
 *
 * @param inputPath - Path to the input PLIST (.tmLanguage or .plist) file
 * @param outputPath - Path where the converted JSON file will be saved
 *
 * @throws {Error} If the input file cannot be read, the PLIST content is invalid,
 *                 or the output file cannot be written
 *
 * @example
 * ```typescript
 * // Convert .tmLanguage file to JSON
 * plistToJson('./syntaxes/example.tmLanguage', './syntaxes/example.tmLanguage.json');
 *
 * // Convert .plist file to JSON
 * plistToJson('./syntaxes/example.plist', './syntaxes/example.json');
 * ```
 */

export function plistToJson(inputPath: string, outputPath: string) {
  try {
    const tmLanguage = fs.readFileSync(inputPath, "utf-8");
    const jsonObject = plist.parse(tmLanguage);
    fs.writeFileSync(outputPath, JSON.stringify(jsonObject, null, 2));
  } catch (error) {
    throw new Error(
      `Failed to convert syntax file: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
