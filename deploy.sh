#!/usr/bin/env sh

# abort on errors
set -e

# build
pnpm run build

# navigate into the build output directory
cd apps/site/dist

git init
git checkout -b main
git add -A
git commit -m "deploy"

git push -f git@github.com:seanaye/portfolio.git main:deploy

cd -
