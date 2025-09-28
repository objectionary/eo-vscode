#!/usr/bin/env bash

CODE_TESTS_PATH="$(pwd)/client/out/test"
CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"
export CODE_TESTS_PATH
export CODE_TESTS_WORKSPACE
export DISPLAY=:0

npm run fetch-and-build-grammar
npm run compile

node "$(pwd)/client/out/end-to-end-test/runTest"
