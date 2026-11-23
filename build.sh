#!/bin/sh
# Builds dist/expense-tracker.html from src/ parts (alphabetical order), stamps the version, and syntax-checks the script.
set -e
cd "$(dirname "$0")"; mkdir -p dist
VER=$(cat VERSION)
NOTE=$(awk '/^## /{n++} n==1 && /^- /{sub(/^- /,""); print; exit}' CHANGELOG.md | cut -c1-110 | sed "s/[\\'&|]/ /g")
cat src/*.html | sed "s|__VERSION__|$VER|g; s|__WHATS_NEW__|$NOTE|g" > dist/expense-tracker.html
awk '/<script>/{f=1;next}/<\/script>/{f=0}f' dist/expense-tracker.html > dist/check.js
node --check dist/check.js && echo "OK v$VER: dist/expense-tracker.html ($(wc -c < dist/expense-tracker.html) bytes)"
