// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import * as path from "path";

/**
 * Derives a local file name from a URL, ignoring query string and fragment.
 *
 * @param url - URL of the syntax file
 * @returns Safe base name for a local file
 * @throws Error if no valid file name can be derived
 */
export function syntaxFileName(url: string): string {
  let pathname: string;
  try {
    pathname = new URL(url).pathname;
  } catch {
    pathname = url.split(/[?#]/)[0];
  }
  let name = path.posix.basename(pathname);
  try {
    name = decodeURIComponent(name);
  } catch {
    // keep the raw name
  }
  name = path.basename(name.replace(/\\/g, "/"));
  if (!name || name === "." || name === ".." || /[<>:"|?*]/.test(name) || [...name].some((c) => c.charCodeAt(0) < 32)) {
    throw new Error(`Cannot derive a valid file name from URL: ${url}`);
  }
  return name;
}
