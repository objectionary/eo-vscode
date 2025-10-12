#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
# SPDX-License-Identifier: MIT

CODE_TESTS_PATH="$(pwd)/out/test"
CODE_TESTS_WORKSPACE="$(pwd)/testFixture"
export CODE_TESTS_PATH
export CODE_TESTS_WORKSPACE
export DISPLAY=:0

node "$(pwd)/out/end-to-end-test/runTest"
