#!/usr/bin/env bash

export CODE_TESTS_PATH="$(pwd)/client/out/test"
export CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"
export DISPLAY=:0

npm run fetch-and-build-grammar
npm run compile

node "$(pwd)/client/out/end-to-end-test/runTest"