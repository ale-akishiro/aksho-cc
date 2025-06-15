# Akshoverse Studio NovelAI Proxy

A CORS-enabled proxy server for seamless NovelAI API integration with Akshoverse Studio.

## Features

- ✅ **CORS handling** - Enables browser-based NovelAI API access
- ✅ **ZIP extraction** - Automatically extracts images from NovelAI response
- ✅ **Base64 encoding** - Returns images ready for browser display
- ✅ **Error handling** - Comprehensive API error management
- ✅ **Rate limiting** - Built-in protection
- ✅ **Health checks** - Monitoring endpoint
- ✅ **Security** - API keys handled securely

## Quick Start

```bash
# Install dependencies
npm install

# Start server
npm start

# Test health endpoint
curl http://localhost:3001/health
```

## API Usage

### Generate Image
```bash
POST /api/generate-image
Content-Type: application/json

{
  "apiKey": "your-novelai-api-key",
  "prompt": "character description here",
  "settings": {
    "width": 832,
    "height": 1216,
    "steps": 28,
    "scale": 5
  }
}
```

### Response
```json
{
  "success": true,
  "image": "data:image/png;base64,iVBORw0KGgoAAAANSU...",
  "filename": "generated-image.png",
  "contentType": "image/png",
  "size": 1024576
}
```

## Frontend Integration

The Akshoverse Studio frontend automatically:
1. Tries local proxy (`localhost:3001`)
2. Tries same-domain proxy (`/api/generate-image`)
3. Tries configured remote proxy
4. Falls back to direct API (usually fails due to CORS)
5. Suggests copy-prompt workaround

## Deployment

See `PROXY_DEPLOYMENT.md` for detailed deployment instructions for:
- Heroku
- Vercel
- Railway
- DigitalOcean
- Self-hosted VPS

## Environment Variables

- `PORT` - Server port (default: 3001)
- `CORS_ORIGIN` - Allowed origins (default: *)

## Security

- API keys are never logged or stored
- CORS is configurable for production
- Rate limiting prevents abuse
- Input validation on all endpoints

## License

MIT - Same as Akshoverse Studio