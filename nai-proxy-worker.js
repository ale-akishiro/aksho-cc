/**
 * Built-in NovelAI Proxy Service Worker for Akshoverse Studio
 * 
 * This service worker intercepts requests to bypass CORS restrictions
 * and enables direct NovelAI API access from the browser.
 */

const WORKER_VERSION = 'v1.0.0';
const NOVELAI_API_URL = 'https://api.novelai.net/ai/generate-image';

// Install and activate immediately
self.addEventListener('install', (event) => {
    console.log(`🔧 NAI Proxy Worker ${WORKER_VERSION} installing...`);
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log(`✅ NAI Proxy Worker ${WORKER_VERSION} activated`);
    event.waitUntil(self.clients.claim());
});

// Handle fetch requests
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Only intercept our proxy requests
    if (url.pathname === '/nai-proxy/generate') {
        event.respondWith(handleNAIRequest(event.request));
    }
});

/**
 * Handle NovelAI API requests through the service worker
 */
async function handleNAIRequest(request) {
    try {
        console.log('🎨 Processing NAI request via Service Worker...');
        
        // Parse the incoming request
        const requestData = await request.json();
        const { apiKey, prompt, settings = {} } = requestData;
        
        // Validate inputs
        if (!apiKey || !prompt) {
            return createResponse({
                success: false,
                error: 'API key and prompt are required'
            }, 400);
        }
        
        // Prepare NovelAI request payload
        const payload = {
            input: prompt,
            model: 'nai-diffusion-3',
            action: 'generate',
            parameters: {
                width: settings.width || 832,
                height: settings.height || 1216,
                scale: settings.scale || 5,
                sampler: settings.sampler || 'k_euler',
                steps: settings.steps || 28,
                seed: settings.seed || Math.floor(Math.random() * 4294967295),
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
            }
        };
        
        // Create NovelAI API request
        const naiRequest = new Request(NOVELAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Akshoverse-Studio/1.0'
            },
            body: JSON.stringify(payload)
        });
        
        console.log('📡 Sending request to NovelAI API...');
        
        // Make the actual API call (Service Worker bypasses CORS)
        const apiResponse = await fetch(naiRequest);
        
        if (!apiResponse.ok) {
            console.error(`❌ NovelAI API error: ${apiResponse.status}`);
            
            let errorMessage = 'NovelAI API request failed';
            switch (apiResponse.status) {
                case 401:
                    errorMessage = 'Invalid API key';
                    break;
                case 402:
                    errorMessage = 'Insufficient credits';
                    break;
                case 429:
                    errorMessage = 'Rate limit exceeded';
                    break;
                default:
                    errorMessage = `API Error: ${apiResponse.status}`;
            }
            
            return createResponse({
                success: false,
                error: errorMessage,
                status: apiResponse.status
            }, apiResponse.status);
        }
        
        // Get the response as array buffer
        const responseBuffer = await apiResponse.arrayBuffer();
        console.log(`📦 Received ${responseBuffer.byteLength} bytes from NovelAI`);
        
        // Convert to base64 for browser consumption
        const base64Image = arrayBufferToBase64(responseBuffer);
        
        console.log('✅ Image processed successfully');
        
        return createResponse({
            success: true,
            image: `data:image/png;base64,${base64Image}`,
            size: responseBuffer.byteLength,
            timestamp: Date.now()
        });
        
    } catch (error) {
        console.error('💥 Service Worker error:', error);
        
        return createResponse({
            success: false,
            error: `Service Worker error: ${error.message}`,
            details: error.stack
        }, 500);
    }
}

/**
 * Create a properly formatted response
 */
function createResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status: status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    });
}

/**
 * Convert ArrayBuffer to Base64 string
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

console.log(`🚀 NAI Proxy Service Worker ${WORKER_VERSION} loaded and ready`);