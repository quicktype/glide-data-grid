#!/bin/bash

set -e

for DIR in "next-gdg" "cra5-gdg" "cra4-gdg"
do
    pushd $DIR
    npm ci
    rm -rf node_modules/@workfront-grid/glide-data-grid
    ln -s ../../../../packages/core/ node_modules/@workfront-grid/glide-data-grid
    npm run build
    popd
done
