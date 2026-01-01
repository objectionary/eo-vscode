#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright (c) 2021-2026 Objectionary.com
# SPDX-License-Identifier: MIT

GRAMMAR_URL="https://raw.githubusercontent.com/objectionary/eo.tmbundle/refs/heads/master/Syntaxes/eo.tmLanguage"

npm run compile
node "$(pwd)/out/lib/syntax-processor.js" $GRAMMAR_URL
