#!/usr/bin/env bash

export CODE_TESTS_PATH="$(pwd)/client/out/test"
export CODE_TESTS_WORKSPACE="$(pwd)/client/testFixture"

# Uses fixed grammar for testing. If grammar is changed, the tests
# need to change as well
cp $(pwd)/server/testFixture/Program.g4 $(pwd)/server/resources/Program.g4
cd $(pwd)/server
npm run build-parser

cd ../
npm run compile

node "$(pwd)/client/out/test/runTest"