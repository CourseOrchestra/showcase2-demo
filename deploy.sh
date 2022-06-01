#!/usr/bin/env sh

set -e

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:CourseOrchestra/showcase2-demo.git main:gh-pages

cd -