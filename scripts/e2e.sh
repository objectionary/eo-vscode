#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
# SPDX-License-Identifier: MIT

CODE_TESTS_PATH="$(pwd)/client/out/test"
CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"
export CODE_TESTS_PATH
export CODE_TESTS_WORKSPACE

cd "$(pwd)/server" || return
npm run build

cd ../
npm run compile

node "$(pwd)/client/out/end-to-end-test/runTest"
