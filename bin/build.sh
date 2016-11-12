#!/bin/bash

set -e

mkdir -p ./build/staticjs
rm -f ./build/staticjs/*.js

rsync -a --delete ./public/assets/ ./build/assets
rsync -a ./public/index.html ./build/index.html

NODE_ENV=production webpack -p --progress --output-path ./build/staticjs/
