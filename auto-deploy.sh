#!/bin/bash
set -e

echo "🚀 Auto-deploying to s00k.tv/word..."

# Build the site
npm run build

# Create deployment package
tar -czf sook-word-site.tar.gz -C out .

echo "✅ Deployment package created: sook-word-site.tar.gz"
echo "📦 Upload this file to your server and extract to /word directory"
echo ""
echo "Server commands to run:"
echo "scp sook-word-site.tar.gz user@s00k.tv:/tmp/"
echo "ssh user@s00k.tv 'cd /var/www/html && mkdir -p word && cd word && tar -xzf /tmp/sook-word-site.tar.gz'"