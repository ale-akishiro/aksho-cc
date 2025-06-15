# Built-in NovelAI Proxy

Akshoverse Studio now includes a **built-in proxy** using Service Worker technology that automatically bypasses CORS restrictions without requiring any external setup!

## How It Works

The built-in proxy uses a **Service Worker** (`nai-proxy-worker.js`) that:

1. ✅ **Runs directly in your browser** - No external server needed
2. ✅ **Bypasses CORS automatically** - Service Workers can make cross-origin requests
3. ✅ **Extracts images from ZIP** - Handles NovelAI's ZIP response format
4. ✅ **Works offline-first** - Continues working even with poor connectivity
5. ✅ **Zero configuration** - Automatically enabled when you load the page

## Technical Details

### Service Worker Registration
The service worker is automatically registered when you load Akshoverse Studio:

```javascript
navigator.serviceWorker.register('/nai-proxy-worker.js')
```

### Request Flow
1. Frontend makes request to `/nai-proxy/generate-image`
2. Service Worker intercepts the request
3. Service Worker forwards to NovelAI API (bypassing CORS)
4. Service Worker processes the ZIP response
5. Service Worker returns Base64 image to frontend

### API Endpoint
**Internal endpoint:** `/nai-proxy/generate-image`

**Request:**
```json
{
  "apiKey": "your-novelai-api-key",
  "prompt": "character description",
  "settings": {
    "width": 832,
    "height": 1216,
    "steps": 28,
    "scale": 5
  }
}
```

**Response:**
```json
{
  "success": true,
  "image": "data:image/png;base64,iVBORw0KGgoAAAA...",
  "filename": "generated-image.png",
  "contentType": "image/png",
  "size": 1024576
}
```

## Advantages

### ✅ **No External Dependencies**
- No need to deploy separate proxy servers
- No hosting costs
- No maintenance required

### ✅ **Better Security**
- API keys never leave your browser
- No third-party servers involved
- Full control over the proxy logic

### ✅ **Improved Performance**
- Direct browser-to-API communication
- No additional network hops
- Cached service worker for faster loading

### ✅ **Always Available**
- Works immediately when you load the page
- No setup or configuration required
- Automatic fallbacks if service worker fails

## Limitations

### ⚠️ **Browser Support**
- Requires modern browsers with Service Worker support
- HTTPS required for production (works on localhost for development)
- Some older browsers may not support Service Workers

### ⚠️ **ZIP Processing**
- Simplified ZIP extraction (may not handle all ZIP formats)
- Falls back to raw data if ZIP extraction fails
- More robust than direct API but not as powerful as server-side processing

## Fallback System

The built-in proxy is the **first choice** in our automatic fallback system:

1. **Built-in Service Worker proxy** ← Primary method
2. External proxy server (if available)
3. Direct API call (usually fails due to CORS)
4. Copy prompt functionality (always works)

## Browser Console

You can monitor the built-in proxy in your browser's developer console:

```
✅ Built-in NAI Proxy Service Worker registered
🎨 Proxying NAI request via Service Worker...
✅ Image extracted successfully via Service Worker
```

## Troubleshooting

### Service Worker Not Registering
- Ensure you're accessing via HTTPS (or localhost)
- Check browser console for registration errors
- Clear browser cache and reload

### CORS Errors Still Occurring
- Verify service worker is active in DevTools > Application > Service Workers
- Check if service worker is intercepting requests in Network tab
- Ensure `/nai-proxy-worker.js` file is accessible

### ZIP Extraction Fails
- Service worker will fall back to raw data automatically
- Check console for "ZIP extraction not available" message
- Images may still work but require manual processing

## Development Notes

The service worker automatically:
- Handles all CORS headers
- Processes NovelAI API responses
- Converts images to Base64 for browser display
- Provides detailed error messages
- Logs activity to browser console

This built-in solution provides the same seamless experience as external proxy servers but without any setup requirements!