#!/usr/bin/env bash

# Uses fixed grammar for testing. If grammar is changed, the tests
# need to change as well
cp $(pwd)/server/testFixture/Program.g4 $(pwd)/server/resources/Program.g4
cd $(pwd)/server
npm run build-parser

cd ../
npm run compile