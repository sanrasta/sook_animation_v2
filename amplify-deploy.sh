#!/bin/bash
set -e

echo "🔗 Setting up for Amplify deployment at s00k.tv/word"

# Copy files to a word-site directory structure
mkdir -p ../s00k-tv-main/word-site
cp -r * ../s00k-tv-main/word-site/

echo "✅ Files copied to main s00k.tv repository"
echo ""
echo "Next steps:"
echo "1. cd ../s00k-tv-main"
echo "2. Add these Amplify rewrites to your existing amplify.yml:"
echo ""
echo "  rewrites:"
echo "    - source: '/word/<*>'"
echo "      target: '/word/<*>'"
echo "      status: '200'"
echo "    - source: '/word'"
echo "      target: '/word/index.html'"
echo "      status: '200'"
echo ""
echo "3. git add . && git commit -m 'Add word site' && git push"