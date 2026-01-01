// SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
// SPDX-License-Identifier: MIT

import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";

import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "url";
import path from "path";

const compat = new FlatCompat({
    baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [
    ...compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:n/recommended-module",
    ),
    {
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            "@typescript-eslint": typescriptEslint,
        },
        rules: {
            "semi": [2, "always"],
            "consistent-return": "off",
            "no-process-exit": "off",
            "@typescript-eslint/no-unused-vars": 0,
            "@typescript-eslint/no-explicit-any": 0,
            "@typescript-eslint/explicit-module-boundary-types": 0,
            "@typescript-eslint/no-non-null-assertion": 0,
            "n/no-unsupported-features/es-syntax": ["error", {
                "ignores": ["modules"],
            }],
            "n/no-missing-import": "off",
            "n/no-extraneous-import": "off",
            "n/no-unpublished-import": "off",
            "n/no-process-exit": "off",
            "jsdoc/require-param-type": "off",
            "jsdoc/require-returns-type": "off",
            "jsdoc/require-hyphen-before-param-description": "off",
        },
    },
    {
        ignores: ["node_modules/**/*"]
    }
];
