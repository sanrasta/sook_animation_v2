#!/bin/bash

# Deploy Sook World Word Site to s00k.tv/word

set -e

echo "🚀 Deploying Sook World Word Site to s00k.tv/word"

# Build the static site
echo "📦 Building static site..."
npm run build

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Build failed - out directory not found"
    exit 1
fi

echo "✅ Build complete"
echo "📁 Static files ready in ./out directory"
echo ""
echo "📋 Next steps:"
echo "1. Upload contents of ./out directory to your web server"
echo "2. Configure server to serve files from /word path"
echo "3. Ensure server serves index.html for SPA routing"
echo ""
echo "🌐 Site will be available at: https://s00k.tv/word"