# AWS Amplify Deployment Guide

## Quick Deploy Steps

1. **Connect GitHub Repository**
   - Go to: https://us-east-1.console.aws.amazon.com/amplify/apps/d1v3aznasyknoe/overview
   - Click "Connect repository"
   - Select GitHub: `aleph2zed/Sook-World-Word-Site`
   - Branch: `main`

2. **Configure Build Settings**
   - Amplify will auto-detect the `amplify.yml` file
   - Build command: `npm run build`
   - Output directory: `out`

3. **Set Custom Domain**
   - In Amplify console → Domain management
   - Add domain: `word.s00k.tv`
   - Configure DNS in your domain provider

## Build Configuration

The project is configured for static export:
- `next.config.js` has `output: 'export'` enabled
- `amplify.yml` builds to `out` directory
- Images are unoptimized for static hosting

## Environment Variables

None required for this static site.

## Custom Domain Setup

1. In Amplify console, go to Domain management
2. Click "Add domain"
3. Enter: `word.s00k.tv`
4. Follow DNS configuration steps
5. Wait for SSL certificate provisioning

## Deployment Status

Once connected, every push to `main` branch will trigger automatic deployment.