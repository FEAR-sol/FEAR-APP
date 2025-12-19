# Quick EmailJS Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your email
3. Verify your email address

### Step 2: Add Email Service
1. In dashboard, click "Email Services" → "Add New Service"
2. Choose "Gmail" (recommended) or your email provider
3. Connect your email account
4. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates" → "Create New Template"
2. **Template Name**: "Contact Form"
3. **Subject**: `New Contact from {{from_name}} - FEAR Website`
4. **Content**:
```
Hello,

You have received a new contact form submission from your FEAR website:

Name: {{from_name}}
Email: {{from_email}}

Project Description:
{{message}}

---
Sent from FEAR Website Contact Form
```
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxx`)

### Step 5: Update Environment Variables
1. Open `.env.local` file in your project
2. Replace the placeholder values:
```env
VITE_EMAILJS_SERVICE_ID=service_your_actual_id
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 6: Test
1. Run `npm run dev`
2. Go to contact section
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message!

## ✅ What's Already Done
- ✅ EmailJS package installed
- ✅ Contact form component ready
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Professional styling

## 📧 Email Destination
All emails will be sent to: **contact@fear.in**

## 🔧 Troubleshooting
- **"EmailJS configuration is missing"** → Check your .env.local file
- **No emails received** → Check spam folder
- **Form not working** → Check browser console for errors

## 💡 Free Plan Limits
- 200 emails/month (plenty for contact forms)
- EmailJS branding in emails
- All features included

That's it! Your contact form will now send emails directly to contact@fear.in when users submit the form.