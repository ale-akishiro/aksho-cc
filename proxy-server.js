/**
 * NovelAI Proxy Server for Akshoverse Studio
 * 
 * Simple Express server that proxies requests to NovelAI API
 * and handles CORS issues for browser-based applications.
 */

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const AdmZip = require('adm-zip');

const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
    origin: '*', // In production, specify your domain
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON bodies
app.use(express.json({ limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'NovelAI Proxy for Akshoverse Studio',
        timestamp: new Date().toISOString()
    });
});

// NovelAI image generation proxy endpoint
app.post('/api/generate-image', async (req, res) => {
    try {
        const { apiKey, prompt, settings = {} } = req.body;

        // Validate required fields
        if (!apiKey) {
            return res.status(400).json({ 
                error: 'API key is required',
                code: 'MISSING_API_KEY'
            });
        }

        if (!prompt) {
            return res.status(400).json({ 
                error: 'Prompt is required',
                code: 'MISSING_PROMPT'
            });
        }

        console.log(`[${new Date().toISOString()}] Generating image for prompt: ${prompt.substring(0, 50)}...`);

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

        // Merge with provided settings
        const finalSettings = { ...defaultSettings, ...settings };

        // Prepare request payload for NovelAI
        const payload = {
            input: prompt,
            model: 'nai-diffusion-3',
            action: 'generate',
            parameters: finalSettings
        };

        // Make request to NovelAI API
        const response = await fetch('https://api.novelai.net/ai/generate-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'Akshoverse-Studio-Proxy/1.0'
            },
            body: JSON.stringify(payload)
        });

        // Handle API errors
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`NovelAI API Error: ${response.status} - ${errorText}`);
            
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
                    errorMessage = `API Error: ${response.status} - ${errorText}`;
            }

            return res.status(response.status).json({
                error: errorMessage,
                code: errorCode,
                details: errorText
            });
        }

        // Get the response as buffer (NovelAI returns ZIP file)
        const buffer = await response.buffer();
        
        try {
            // Extract image from ZIP
            const zip = new AdmZip(buffer);
            const zipEntries = zip.getEntries();
            
            if (zipEntries.length === 0) {
                throw new Error('No files found in response ZIP');
            }

            // Get the first image file
            const imageEntry = zipEntries.find(entry => 
                entry.entryName.match(/\.(png|jpg|jpeg)$/i)
            ) || zipEntries[0];

            const imageBuffer = imageEntry.getData();
            const imageBase64 = imageBuffer.toString('base64');
            
            // Determine content type
            const contentType = imageEntry.entryName.toLowerCase().endsWith('.png') 
                ? 'image/png' 
                : 'image/jpeg';

            console.log(`[${new Date().toISOString()}] Image generated successfully`);

            // Return base64 encoded image
            res.json({
                success: true,
                image: `data:${contentType};base64,${imageBase64}`,
                filename: imageEntry.entryName,
                contentType: contentType,
                size: imageBuffer.length
            });

        } catch (zipError) {
            console.error('Error extracting image from ZIP:', zipError);
            
            // Fallback: return raw buffer as base64
            const imageBase64 = buffer.toString('base64');
            res.json({
                success: true,
                image: `data:image/png;base64,${imageBase64}`,
                filename: 'generated-image.png',
                contentType: 'image/png',
                size: buffer.length,
                note: 'Raw response returned (ZIP extraction failed)'
            });
        }

    } catch (error) {
        console.error('Proxy server error:', error);
        
        let errorMessage = 'Internal server error';
        let errorCode = 'INTERNAL_ERROR';

        if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
            errorMessage = 'Unable to connect to NovelAI API. Please check your internet connection.';
            errorCode = 'CONNECTION_ERROR';
        } else if (error.name === 'FetchError') {
            errorMessage = 'Network error while contacting NovelAI API.';
            errorCode = 'NETWORK_ERROR';
        }

        res.status(500).json({
            error: errorMessage,
            code: errorCode,
            details: error.message
        });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
        error: 'Internal server error',
        code: 'UNHANDLED_ERROR'
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        code: 'NOT_FOUND',
        availableEndpoints: [
            'GET /health - Health check',
            'POST /api/generate-image - Generate image via NovelAI'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 NovelAI Proxy Server running on port ${PORT}`);
    console.log(`📍 Health check: http://localhost:${PORT}/health`);
    console.log(`🎨 Image generation: POST http://localhost:${PORT}/api/generate-image`);
    console.log('');
    console.log('📋 Ready to proxy requests to NovelAI API!');
});

module.exports = app;