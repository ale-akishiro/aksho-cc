/**
 * Vercel Serverless Function - NovelAI Proxy for Akshoverse Studio
 * 
 * This function acts as a CORS-enabled proxy between the frontend
 * and NovelAI's API, running on Vercel's free tier.
 */

export default async function handler(req, res) {
    // Enable CORS for all origins (you can restrict this in production)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            error: 'Method not allowed. Use POST.' 
        });
    }
    
    try {
        console.log('🎨 Processing NovelAI request via Vercel proxy...');
        
        const { apiKey, prompt, settings = {} } = req.body;
        
        // Validate required inputs
        if (!apiKey) {
            return res.status(400).json({
                success: false,
                error: 'API key is required'
            });
        }
        
        if (!prompt) {
            return res.status(400).json({
                success: false,
                error: 'Prompt is required'
            });
        }
        
        // Default NovelAI settings
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
        
        // Merge with user settings
        const finalSettings = { ...defaultSettings, ...settings };
        
        // Prepare NovelAI API payload
        const payload = {
            input: prompt,
            model: 'nai-diffusion-3',
            action: 'generate',
            parameters: finalSettings
        };
        
        console.log('📡 Sending request to NovelAI API...');
        
        // Make request to NovelAI API
        const response = await fetch('https://api.novelai.net/ai/generate-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Akshoverse-Studio-Vercel-Proxy/1.0'
            },
            body: JSON.stringify(payload)
        });
        
        // Handle API errors
        if (!response.ok) {
            console.error(`❌ NovelAI API error: ${response.status}`);
            
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
                default:
                    const errorText = await response.text().catch(() => 'Unknown error');
                    errorMessage = `API Error ${response.status}: ${errorText}`;
            }
            
            return res.status(response.status).json({
                success: false,
                error: errorMessage,
                code: errorCode
            });
        }
        
        // Get response as buffer
        const buffer = await response.arrayBuffer();
        console.log(`📦 Received ${buffer.byteLength} bytes from NovelAI`);
        
        // Convert to base64 for frontend consumption
        const base64Image = Buffer.from(buffer).toString('base64');
        
        console.log('✅ Image processed successfully');
        
        // Return success response
        return res.status(200).json({
            success: true,
            image: `data:image/png;base64,${base64Image}`,
            size: buffer.byteLength,
            timestamp: Date.now(),
            settings: finalSettings
        });
        
    } catch (error) {
        console.error('💥 Vercel proxy error:', error);
        
        let errorMessage = 'Internal proxy error';
        let errorCode = 'INTERNAL_ERROR';
        
        // Handle specific error types
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage = 'Network error connecting to NovelAI API';
            errorCode = 'NETWORK_ERROR';
        } else if (error.code === 'ENOTFOUND') {
            errorMessage = 'Unable to reach NovelAI API';
            errorCode = 'CONNECTION_ERROR';
        }
        
        return res.status(500).json({
            success: false,
            error: errorMessage,
            code: errorCode,
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}