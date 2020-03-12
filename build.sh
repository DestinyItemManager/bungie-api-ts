#!/bin/sh -ex

# Prepare the generated source directory
rm -rf ./generated-src
mkdir -p generated-src
cp generator/http.d.ts generated-src

# Compile and run the generator
tsc -p tsconfig.json
node ./build/generate.js

#rm -rf ./docs
#typedoc --target ES5 --out ./docs/ --readme README.md generated-src
#touch ./docs/.nojekyll

# Build the package from the generated sources
rm -rf ./lib
mkdir -p lib
rsync -a --include '*/' --include '*.d.ts' --exclude '*' generated-src/ lib/
tsc -p tsconfig-package.json

# Copy package.json into lib - we'll publish lib as the package instead of the whole repo, so paths are nicer.
cp package.json lib/
cp README.md lib/
cp bungie-api-LICENSE lib/

sed -i '' 's/dist\///' lib/package.json
sed -i '' 's/index\.ts/index.js/' lib/package.json
