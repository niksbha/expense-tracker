#!/bin/sh
# Builds dist/expense-tracker.html from src/ parts (alphabetical order) and syntax-checks the script.
set -e
cd "$(dirname "$0")"; mkdir -p dist
cat src/*.html > dist/expense-tracker.html
awk '/<script>/{f=1;next}/<\/script>/{f=0}f' dist/expense-tracker.html > dist/check.js
node --check dist/check.js && echo "OK: dist/expense-tracker.html ($(wc -c < dist/expense-tracker.html) bytes)"
