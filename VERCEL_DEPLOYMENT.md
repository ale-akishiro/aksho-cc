# Deploy Akshoverse Studio to Vercel (Free)

This guide shows you how to deploy Akshoverse Studio with the NovelAI proxy to Vercel's free tier.

## What You Get

✅ **Free hosting** - Vercel's free tier includes:
- 100GB bandwidth per month
- Unlimited static sites  
- Serverless functions (for the NovelAI proxy)
- Automatic HTTPS
- Global CDN

✅ **Working NovelAI integration** - Direct image generation from the browser
✅ **No server management** - Fully serverless
✅ **Automatic deployments** - Push to GitHub = automatic updates

## Prerequisites

1. **GitHub account** - To store your code
2. **Vercel account** - Sign up at https://vercel.com (free)
3. **Push your code to GitHub** (this repository)

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# If you haven't already, push this repository to GitHub
git add .
git commit -m "Add Vercel proxy deployment"
git push origin main  # or master
```

### 2. Deploy to Vercel

**Option A: Web Interface (Easiest)**

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect the configuration
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete

**Option B: Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel --prod

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name? (accept default or choose your own)
# - Directory? ./
# - Override settings? N
```

### 3. Test Your Deployment

1. **Visit your live site** - Vercel will give you a URL like `https://your-project.vercel.app`
2. **Test the NAI tab**:
   - Enter your NovelAI API key
   - Create a character prompt
   - Click "GENERATE IMAGE"
   - Should work without CORS errors!

## How It Works

The deployment includes:

- **Frontend files** - Your HTML, CSS, JS served as static files
- **Serverless function** - `/api/generate-image.js` handles NovelAI proxy
- **CORS headers** - Properly configured to allow browser requests
- **Automatic scaling** - Functions run on-demand

## File Structure

```
your-project/
├── index.html              # Main frontend
├── styles.css              # Styling
├── logic.js                # Frontend logic
├── api/generate-image.js    # Serverless proxy function
├── vercel.json             # Vercel configuration
└── package.json            # Project metadata
```

## Troubleshooting

### Common Issues:

**1. "404 Not Found" when generating images**
- Make sure `api/generate-image.js` is deployed
- Check Vercel dashboard functions tab
- Verify the API endpoint is `/api/generate-image`

**2. CORS errors**
- Check `vercel.json` CORS configuration
- Verify headers in the serverless function

**3. Function timeout**
- NovelAI generation should complete within 30 seconds
- If it fails, check the function logs in Vercel dashboard

**4. "Invalid API key" errors**  
- Make sure you're entering your actual NovelAI API key
- Check the key has sufficient credits

### Checking Logs:

1. Go to Vercel dashboard
2. Select your project  
3. Click "Functions" tab
4. Click on a function execution to see logs

## Custom Domain (Optional)

To use your own domain:

1. Go to Vercel dashboard → Project Settings → Domains
2. Add your domain
3. Configure DNS records as shown
4. Vercel provides automatic HTTPS

## Updating Your Deployment

Simply push changes to GitHub:

```bash
git add .
git commit -m "Update features"
git push origin main
```

Vercel automatically redeploys within 2-3 minutes.

## Cost

**Free tier limits:**
- 100GB bandwidth/month (sufficient for most personal use)
- 100 serverless function executions/hour
- After limits: ~$20/month for heavy usage

For a personal character creation tool, you'll likely stay within free limits.

## Next Steps

After deployment:
1. **Bookmark your Vercel URL** for easy access
2. **Test thoroughly** with real NovelAI generation
3. **Share the URL** - your friends can use it too!
4. **Monitor usage** in Vercel dashboard

Your Akshoverse Studio is now live with working NovelAI integration! 🚀