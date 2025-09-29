// SPDX-FileCopyrightText: Copyright (c) Microsoft Corporation. All rights reserved.
// SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
// SPDX-License-Identifier: MIT

import * as path from "path";
import * as Mocha from "mocha";
import * as glob from "glob";

/**
 * Runs the test suit
 * @returns - Promise that resolves when the testing is done
 */
export function run(): Promise<void> {

    // Create the mocha test
    const mocha = new Mocha({
        ui: "tdd",
        color: true
    });

    mocha.timeout(100000);

    const testsRoot = __dirname;

    return new Promise((resolve, reject) => {
        glob("**.test.js", { cwd: testsRoot }, (err, files) => {
            if (err) {
                return reject(err);
            }

            // Add files to the test suite
            files.forEach(f => mocha.addFile(path.resolve(testsRoot, f)));

            try {

                // Run the mocha test
                mocha.run(failures => {
                    if (failures > 0) {
                        reject(new Error(`${failures} tests failed.`));
                    } else {
                        resolve();
                    }
                });
            } catch (error) {
                reject(error);
            }
        });

    });
}
