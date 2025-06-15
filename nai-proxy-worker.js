/**
 * NovelAI Proxy Service Worker for Akshoverse Studio
 * 
 * This service worker acts as a built-in proxy to handle NovelAI API requests
 * and bypass CORS restrictions directly in the browser.
 */

const CACHE_NAME = 'akshoverse-nai-proxy-v1';
const NOVELAI_API_BASE = 'https://api.novelai.net';

// Install service worker
self.addEventListener('install', (event) => {
    console.log('🔧 NovelAI Proxy Service Worker installing...');
    self.skipWaiting();
});

// Activate service worker
self.addEventListener('activate', (event) => {
    console.log('✅ NovelAI Proxy Service Worker activated');
    event.waitUntil(self.clients.claim());
});

// Handle fetch requests
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Only handle our proxy requests
    if (url.pathname === '/nai-proxy/generate-image') {
        event.respondWith(handleNAIProxyRequest(event.request));
    }
});

/**
 * Handle NovelAI proxy requests
 */
async function handleNAIProxyRequest(request) {
    try {
        // Parse the request body
        const requestData = await request.json();
        const { apiKey, prompt, settings = {} } = requestData;
        
        // Validate required fields
        if (!apiKey) {
            return createErrorResponse('API key is required', 400);
        }
        
        if (!prompt) {
            return createErrorResponse('Prompt is required', 400);
        }
        
        console.log('🎨 Proxying NAI request via Service Worker...');
        
        // Default settings
        const defaultSettings = {
            width: 832,
            height: 1216,
            steps: 28,
            scale: 5,
            sampler: 'k_euler',
            seed: Math.floor(Math.random() * 4294967295),
            n_samples: 1,
            ucPreset: 0,
            qualityToggle: false,
            sm: false,
            sm_dyn: false,
            dynamic_thresholding: false,
            controlnet_strength: 1.0,
            legacy: false,
            add_original_image: false,
            cfg_rescale: 0.0,
            noise_schedule: 'native'
        };
        
        // Merge settings
        const finalSettings = { ...defaultSettings, ...settings };
        
        // Prepare NovelAI API request
        const naiRequest = new Request(`${NOVELAI_API_BASE}/ai/generate-image`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Akshoverse-Studio-Proxy/1.0'
            },
            body: JSON.stringify({
                input: prompt,
                model: 'nai-diffusion-3',
                action: 'generate',
                parameters: finalSettings
            })
        });
        
        // Make request to NovelAI (Service Worker can bypass CORS)
        const response = await fetch(naiRequest);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('NovelAI API Error:', response.status, errorText);
            
            let errorMessage = 'NovelAI API request failed';
            let errorCode = 'API_ERROR';
            
            switch (response.status) {
                case 401:
                    errorMessage = 'Invalid API key. Please check your NovelAI API key.';
                    errorCode = 'INVALID_API_KEY';
                    break;
                case 402:
                    errorMessage = 'Insufficient credits. Please check your NovelAI account balance.';
                    errorCode = 'INSUFFICIENT_CREDITS';
                    break;
                case 429:
                    errorMessage = 'Rate limit exceeded. Please wait a moment and try again.';
                    errorCode = 'RATE_LIMITED';
                    break;
            }
            
            return createErrorResponse(errorMessage, response.status, errorCode);
        }
        
        // Get response as array buffer
        const arrayBuffer = await response.arrayBuffer();
        
        try {
            // Try to extract image from ZIP
            const extractedImage = await extractImageFromZip(arrayBuffer);
            
            if (extractedImage) {
                console.log('✅ Image extracted successfully via Service Worker');
                return new Response(JSON.stringify({
                    success: true,
                    image: extractedImage.dataUrl,
                    filename: extractedImage.filename,
                    contentType: extractedImage.contentType,
                    size: extractedImage.size
                }), {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });
            }
        } catch (zipError) {
            console.warn('ZIP extraction failed, returning raw data:', zipError);
        }
        
        // Fallback: return raw buffer as base64
        const base64 = arrayBufferToBase64(arrayBuffer);
        
        return new Response(JSON.stringify({
            success: true,
            image: `data:image/png;base64,${base64}`,
            filename: 'generated-image.png',
            contentType: 'image/png',
            size: arrayBuffer.byteLength,
            note: 'Raw response (ZIP extraction not available in Service Worker)'
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        
    } catch (error) {
        console.error('Service Worker proxy error:', error);
        
        let errorMessage = 'Internal proxy error';
        let errorCode = 'INTERNAL_ERROR';
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = 'Network error. Unable to reach NovelAI API.';
            errorCode = 'NETWORK_ERROR';
        }
        
        return createErrorResponse(errorMessage, 500, errorCode);
    }
}

/**
 * Create error response
 */
function createErrorResponse(message, status = 500, code = 'ERROR') {
    return new Response(JSON.stringify({
        success: false,
        error: message,
        code: code
    }), {
        status: status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });
}

/**
 * Convert ArrayBuffer to Base64
 */
function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    
    return btoa(binary);
}

/**
 * Extract image from ZIP (simplified version for Service Worker)
 */
async function extractImageFromZip(arrayBuffer) {
    try {
        // This is a simplified ZIP parser for Service Workers
        // For full ZIP support, we'd need a pure JS ZIP library
        
        const view = new DataView(arrayBuffer);
        
        // Look for PNG signature in the buffer
        for (let i = 0; i < view.byteLength - 8; i++) {
            // PNG signature: 89 50 4E 47 0D 0A 1A 0A
            if (view.getUint32(i, false) === 0x89504E47 && 
                view.getUint32(i + 4, false) === 0x0D0A1A0A) {
                
                // Found PNG start, now find the end
                for (let j = i + 8; j < view.byteLength - 8; j++) {
                    // Look for IEND chunk: 49 45 4E 44
                    if (view.getUint32(j + 4, false) === 0x49454E44) {
                        // Extract the PNG
                        const pngBuffer = arrayBuffer.slice(i, j + 12);
                        const base64 = arrayBufferToBase64(pngBuffer);
                        
                        return {
                            dataUrl: `data:image/png;base64,${base64}`,
                            filename: 'generated-image.png',
                            contentType: 'image/png',
                            size: pngBuffer.byteLength
                        };
                    }
                }
            }
        }
        
        return null; // No PNG found
        
    } catch (error) {
        console.error('ZIP extraction error:', error);
        return null;
    }
}