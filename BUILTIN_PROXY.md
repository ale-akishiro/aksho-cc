# Built-in NovelAI Proxy

Akshoverse Studio includes a **built-in CORS bypass** using Service Worker technology that enables direct NovelAI API access from your browser.

## How It Works

1. **Service Worker loads** automatically when you open the app
2. **Intercepts requests** to `/nai-proxy/generate`
3. **Forwards to NovelAI API** (bypassing CORS restrictions)
4. **Returns images** as Base64 data ready for display

## Features

✅ **Zero setup required** - Works immediately  
✅ **No external servers** - Runs entirely in your browser  
✅ **CORS bypass** - Service Workers can make cross-origin requests  
✅ **Secure** - API keys never leave your browser  
✅ **Automatic** - Registers and activates when page loads  

## Browser Requirements

- Modern browsers with Service Worker support (Chrome, Firefox, Safari, Edge)
- HTTPS required for production (localhost works for development)

## Usage

1. Enter your NovelAI API key
2. Create a character prompt  
3. Click "GENERATE IMAGE"
4. Service Worker handles the rest automatically

## Fallback

If the built-in proxy fails, use the "COPY PROMPT" button to copy your prompt and paste it directly into the NovelAI website.

## Technical Details

**Service Worker file:** `nai-proxy-worker.js`  
**Proxy endpoint:** `/nai-proxy/generate`  
**Registration:** Automatic on page load  

The Service Worker intercepts fetch requests and forwards them to NovelAI's API, converting the response to Base64 for browser display.

## Monitoring

Check browser console for Service Worker status:
- `✅ NAI Proxy Worker v1.0.0 activated`
- `🎨 Processing NAI request via Service Worker...`
- `✅ Image processed successfully`