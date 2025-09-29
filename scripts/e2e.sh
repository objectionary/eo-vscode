#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright (c) 2021-2025 Objectionary.com
# SPDX-License-Identifier: MIT

export CODE_TESTS_PATH="$(pwd)/client/out/test"
export CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"
export DISPLAY=:0

bash $(pwd)/scripts/setTestFixture.sh

node "$(pwd)/client/out/end-to-end-test/runTest"