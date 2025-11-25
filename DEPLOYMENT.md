# Deployment Instructions for Netlify

## Overview
This landing page includes an invite-only "Request Early Access" form with Netlify Forms integration. The form captures business information and includes 5 custom interactive questions.

## Features Implemented

### Form Components
1. **Basic Information Collection**
   - Full Name (required)
   - Company Name (required)
   - Business Email (required, validates against popular carriers)
   - Phone Number (required, with country selector)

2. **Custom Interactive Questions**
   - **Hours Slider** (0h - 40h+): Non-billable research hours
   - **Prospect Counter** (+/-): Number of prospects who ceased communication
   - **Depth Gauge** (3 levels): Stage where free value stops
   - **Currency Input**: Average contract value of lost deals
   - **Binary Toggle** (Yes/No): Strategy execution question

### Email Validation
The form blocks submissions from popular email carriers including:
- Gmail, Yahoo, Hotmail, Outlook
- iCloud, AOL, Protonmail
- And 20+ other popular providers

Business emails only are accepted.

### Phone Number Validation
- International phone number support
- Country selector with 18+ countries
- Automatic formatting based on country code
- Visual country flags

## Netlify Deployment Steps

### 1. Push to Git Repository
```bash
git add .
git commit -m "Add Request Early Access form with Netlify Forms"
git push origin main
```

### 2. Deploy to Netlify

#### Option A: Via Netlify UI
1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your Git repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

#### Option B: Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### 3. Form Configuration

Netlify Forms should automatically detect the form in `index.html`. The form is configured with:
- **Form name**: `early-access-request`
- **Data attributes**: `data-netlify="true"`
- **Spam protection**: Honeypot field included

### 4. Access Form Submissions

After deployment:
1. Go to your site in Netlify Dashboard
2. Navigate to **Forms** tab
3. Click on **early-access-request**
4. View all submissions with timestamps

### 5. Set Up Notifications (Optional)

Configure email notifications for new form submissions:
1. In Netlify Dashboard → **Forms** → **Notifications**
2. Click "Add notification"
3. Choose "Email notification"
4. Enter recipient email address
5. Save

You can also set up:
- Slack notifications
- Webhook integrations
- Zapier connections

## Form Data Structure

Each submission captures:

```javascript
{
  name: "John Doe",
  company: "Acme Corp",
  email: "john@acme.com",
  phone: "+1 555 123 4567",
  hours: 25,                    // 0-40+
  prospects: 8,                 // Counter value
  depth: 2,                     // 1, 2, or 3
  contractValue: 150000,        // Dollar amount
  canExecute: "yes"            // "yes" or "no"
}
```

## Testing Forms Locally

**Important**: Netlify Forms only work on Netlify's servers. To test locally:

1. Build and deploy to Netlify first
2. Test the form on your Netlify URL (e.g., `yoursite.netlify.app`)
3. Check form submissions in Netlify Dashboard

Alternatively, for local testing during development:
1. Use Netlify Dev: `netlify dev`
2. This runs a local server that simulates Netlify's environment

## Build Verification

Verify the build works correctly:

```bash
npm run build
npm run preview
```

Visit http://localhost:4173 to test the built version locally.

## Troubleshooting

### Forms Not Appearing in Dashboard
- Ensure the hidden form is in `index.html`
- Check that `data-netlify="true"` attribute is present
- Redeploy the site if forms were added after initial deployment

### Email Validation Too Strict
Edit `src/lib/email-validation.js` to modify the blocked domains list.

### Phone Number Formatting Issues
Adjust country list in `src/components/ui/phone-input.jsx`

## Custom Domain Setup

1. In Netlify Dashboard → **Domain settings**
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. SSL certificate will be automatically provisioned

## Environment Variables

No environment variables are required for the form to function. All form handling is managed by Netlify Forms.

## Support

For issues with:
- **Form functionality**: Check Netlify Forms documentation
- **Component bugs**: Review browser console for errors
- **Build failures**: Check build logs in Netlify Dashboard
