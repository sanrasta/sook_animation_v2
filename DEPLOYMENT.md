# Deployment Guide for s00k.tv/word

## ✅ Build Complete

The static site has been successfully built and is ready for deployment to https://s00k.tv/word

## 📁 Files to Deploy

Upload the entire contents of the `./out` directory to your web server's `/word` path.

## 🚀 Deployment Steps

### Option 1: Manual Upload
1. Copy all files from `./out/` directory
2. Upload to your web server at the `/word` path
3. Ensure your server is configured to serve static files

### Option 2: Using rsync (if you have SSH access)
```bash
rsync -avz --delete ./out/ user@s00k.tv:/path/to/webroot/word/
```

### Option 3: Using SCP
```bash
scp -r ./out/* user@s00k.tv:/path/to/webroot/word/
```

## 🔧 Server Configuration

Ensure your web server (Apache/Nginx) is configured to:
1. Serve static files from the `/word` directory
2. Handle client-side routing by serving `index.html` for 404s within the `/word` path

### Nginx Configuration Example
```nginx
location /word {
    alias /path/to/webroot/word;
    try_files $uri $uri/ /word/index.html;
}
```

### Apache Configuration Example
```apache
<Directory "/path/to/webroot/word">
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /word/index.html [L]
</Directory>
```

## 🌐 Access URLs

After deployment, the site will be available at:
- Main page: https://s00k.tv/word
- Intro page: https://s00k.tv/word/intro
- Timeline page: https://s00k.tv/word/timeline

## ✨ Features Included

- GSAP animations with eye tracking
- Multi-language script transitions
- Responsive design
- Reduced motion support
- Static asset optimization

## 🔄 Future Updates

To update the site:
1. Make changes to the source code
2. Run `npm run build`
3. Upload the new `./out` directory contents

---

**Status:** Ready for deployment ✅
**Build Date:** $(date)
**Total Files:** $(find ./out -type f | wc -l) files