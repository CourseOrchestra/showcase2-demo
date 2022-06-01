#!/usr/bin/env sh

set -e

cd dist

git config user.name "CourseOrchestra"

git init
#git config --global init.defaultBranch main

git config user.name "CourseOrchestra"

git add -A
git commit -m 'deploy'

git push -f git@github.com:CourseOrchestra/showcase2-demo.git main:gh-pages

cd -