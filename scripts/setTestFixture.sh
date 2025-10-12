#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
# SPDX-License-Identifier: MIT

# Uses fixed grammar for testing. If grammar is changed, the tests
# need to change as well
cp "$(pwd)/server/testFixture/Program.g4" "$(pwd)/server/resources/Program.g4"
cd "$(pwd)/server" || return
npm run build-parser

cd ../
npm run compile
