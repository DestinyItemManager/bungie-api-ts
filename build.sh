#!/bin/sh -ex

rm -rf ./build
cp package.json generator

# Prepare the generated source directory
rm -rf ./generated-src
mkdir -p generated-src
cp generator/http.ts generated-src

# Compile and run the generator
tsc -p tsconfig.json
node --experimental-json-modules ./build/generate.js

# Build the package from the generated sources
rm -rf ./lib
mkdir -p lib
rsync -a --include '*/' --include '*.d.ts' --exclude '*' generated-src/ lib/
cp ./generated-src/package.json.notyet ./lib/package.json

babel generated-src --out-dir lib --extensions ".ts"

tsc -p tsconfig-package.json

yarn prettier --write lib/**/*

# Copy files into lib - we'll publish lib as the package instead of the whole repo, so paths are nicer.
cp README.md lib/
cp bungie-api-LICENSE lib/
rm generator/package.json

yarn test