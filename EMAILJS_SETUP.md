# EmailJS Setup Guide for FEAR Website

## Overview
This guide will help you set up EmailJS to send emails from your contact form to contact@fear.in.

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
To: contact@fear.in

Message:
{{message}}

---
This email was sent from the FEAR website contact form.
```

4. Make sure to use these variable names:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - the message content
5. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)
3. Copy this key

## Step 5: Configure Environment Variables
1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Setup
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email at contact@fear.in

## Troubleshooting

### Common Issues:
1. **"EmailJS configuration is missing"** - Check your .env.local file
2. **Emails not received** - Check spam folder, verify template setup
3. **CORS errors** - Make sure your domain is added to EmailJS allowed origins

### EmailJS Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

### Security Notes:
- Never commit your .env.local file to version control
- The .env.local file is already in .gitignore
- Public key is safe to expose (it's meant to be public)

## Features Implemented:
✅ Contact form with validation
✅ Loading states during email sending
✅ Success/error messages
✅ Smooth scrolling to contact section
✅ Form reset after successful submission
✅ Disabled form during submission
✅ Professional email template

## Email Template Variables Available:
- `from_name` - User's name from the form
- `from_email` - User's email from the form
- `to_email` - Your business email (contact@fear.in)
- `message` - User's project description
- `subject` - Auto-generated subject line

The emails will be sent to: **contact@fear.in**