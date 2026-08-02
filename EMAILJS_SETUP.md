# Free contact form setup

The contact form uses [EmailJS](https://www.emailjs.com/), which is suitable for a static portfolio because it can send form submissions to your inbox without a custom backend. The free plan is enough for an early portfolio, subject to EmailJS's current plan limits.

## 1. Create the EmailJS account

1. Create a free account at <https://dashboard.emailjs.com/>.
2. Add an email service and connect the inbox where you want to receive messages (for example, Outlook).
3. Create an email template that uses the following fields:

```text
Subject: {{subject}}
From Name: Portfolio Contact — {{from_name}}
Reply To: {{from_email}}
To Email: your receiving email address
From Email: the default address supplied by your connected EmailJS service
```

Use this plain-text content for a clear, professional message:

```text
You received a new message through your portfolio website.

SENDER DETAILS
Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

MESSAGE
{{message}}

---
Reply directly to this email to contact {{from_name}} at {{from_email}}.
```

Keep the **From Email** set to the address supplied by the connected EmailJS service. Do not use `{{from_email}}` as the actual From Email because sender-domain checks may reject or mark the message as spam. Setting **Reply To** to `{{from_email}}` still makes your email app address replies directly to the visitor.

## 2. Configure the local project

Copy `.env.example` to `.env.local` and replace the placeholders with the values shown in EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxx
```

Restart the Vite development server after changing environment variables. `.env.local` is ignored by Git and must never be committed.

## 3. Configure deployment

Add the same three variables in your hosting provider's project settings, then redeploy. For a Vite app, the variables must begin with `VITE_` to be available in the browser.

In EmailJS, restrict allowed origins to your real deployed domain where possible. The public key is intended for browser use, but domain restrictions and EmailJS rate limits help prevent abuse.

## Fallback behavior

If EmailJS is not configured or a request fails, the form offers a pre-filled `mailto:` link to `femilanbe@outlook.com`. Visitors can use that link in their installed email client instead of losing their message.