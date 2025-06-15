# NovelAI Proxy Server Deployment Guide

This guide explains how to deploy the NovelAI proxy server to enable seamless image generation in Akshoverse Studio.

## Quick Start (Local Development)

1. **Install Node.js** (version 14 or higher)
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the proxy server**:
   ```bash
   npm start
   ```
4. **Test the server**:
   - Open http://localhost:3001/health
   - You should see: `{"status":"ok","service":"NovelAI Proxy for Akshoverse Studio"}`

The frontend will automatically detect and use the local proxy server.

## Production Deployment Options

### Option 1: Heroku (Easiest)

1. **Create Heroku account** at https://heroku.com
2. **Install Heroku CLI**
3. **Deploy**:
   ```bash
   # Login to Heroku
   heroku login
   
   # Create new app
   heroku create akshoverse-proxy
   
   # Deploy
   git add .
   git commit -m "Add NovelAI proxy server"
   git push heroku main
   
   # Check logs
   heroku logs --tail
   ```
4. **Update frontend**: Edit line 1485 in `logic.js` with your Heroku URL

### Option 2: Vercel (Serverless)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Create vercel.json**:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "proxy-server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "/proxy-server.js"
       }
     ]
   }
   ```
3. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 3: Railway

1. **Connect GitHub repository** at https://railway.app
2. **Select your repository**
3. **Railway automatically detects** Node.js and deploys
4. **Environment variables**: None needed for basic setup

### Option 4: DigitalOcean App Platform

1. **Create account** at https://digitalocean.com
2. **Go to App Platform**
3. **Connect GitHub repository**
4. **Configure**:
   - Build Command: `npm install`
   - Run Command: `npm start`
   - Port: 3001

### Option 5: Self-Hosted (VPS)

1. **Get a VPS** (Ubuntu/CentOS)
2. **Install Node.js and PM2**:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```
3. **Clone and setup**:
   ```bash
   git clone https://github.com/your-username/aksho-cc.git
   cd aksho-cc
   npm install
   ```
4. **Start with PM2**:
   ```bash
   pm2 start proxy-server.js --name "akshoverse-proxy"
   pm2 startup
   pm2 save
   ```
5. **Setup reverse proxy** (Nginx):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3001;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## Environment Variables

The proxy server supports these optional environment variables:

- `PORT`: Server port (default: 3001)
- `CORS_ORIGIN`: Allowed CORS origins (default: *)
- `LOG_LEVEL`: Logging level (default: info)

Example:
```bash
PORT=8080 CORS_ORIGIN=https://your-domain.com npm start
```

## Frontend Configuration

Update the proxy URLs in `logic.js` (lines 1482-1486):

```javascript
const proxyUrls = [
    'http://localhost:3001/api/generate-image',     // Local development
    '/api/generate-image',                          // Same domain
    'https://your-heroku-app.herokuapp.com/api/generate-image',  // Your deployment
];
```

## Testing the Deployment

1. **Health check**: Visit `https://your-domain.com/health`
2. **Test generation**: Use the NAI tab in Akshoverse Studio
3. **Check browser console** for connection logs

## Security Notes

- **HTTPS recommended** for production
- **Environment variables** for sensitive config
- **Rate limiting** is included in the proxy
- **API keys** are not logged or stored

## Troubleshooting

### Common Issues:

1. **"Connection refused"**
   - Check if proxy server is running
   - Verify port configuration
   - Check firewall settings

2. **CORS errors still occurring**
   - Verify proxy URL in frontend
   - Check proxy server logs
   - Ensure CORS_ORIGIN is configured correctly

3. **NovelAI API errors**
   - Verify API key is valid
   - Check NovelAI account credits
   - Review NovelAI API status

### Logs:

```bash
# Heroku logs
heroku logs --tail --app your-app-name

# PM2 logs
pm2 logs akshoverse-proxy

# Local development
npm run dev  # Uses nodemon for auto-restart
```

## Cost Estimation

- **Heroku**: $7/month (hobby tier)
- **Vercel**: Free tier usually sufficient
- **Railway**: $5/month
- **DigitalOcean**: $5/month (basic droplet)
- **Self-hosted**: Variable (VPS costs)

## Support

For deployment issues:
1. Check the logs first
2. Verify all dependencies are installed
3. Test the health endpoint
4. Check browser network tab for connection errors

The proxy provides detailed error messages to help diagnose issues.