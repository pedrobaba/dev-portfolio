import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, Twitter } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { profile, emailjsConfig } from '@/data/content';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

const whatsappNumber = profile.phone.replace(/\+/g, '').replace(/\s/g, '');
const contactDetails = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: MessageCircle, label: 'WhatsApp', value: profile.phone, href: `https://wa.me/${whatsappNumber}` },
  { icon: MapPin, label: 'Location', value: profile.location, href: null },
];

const socialLinks = [
  { icon: Github, href: profile.social.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: profile.social.twitter, label: 'Twitter' },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const fallbackMailto = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || 'Portfolio enquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
      setStatus('error');
      setErrorMsg('The online form is not configured yet. You can still send your message by email below.');
      return;
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: profile.name,
        },
        emailjsConfig.publicKey
      );
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      const providerError = err as { text?: string; status?: number; message?: string };
      const details = providerError.text || providerError.message;
      setErrorMsg(details ? `The online form could not send: ${details}` : 'The online form could not send. Please use the email fallback below.');
    }
  };

  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Let&apos;s connect"
          subtitle="I&apos;m open to Frontend opportunities, internships, and conversations about building for the web."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-plum p-6 text-cream dark:bg-[#241d2c]">
              <h3 className="font-heading text-lg font-bold">Get in touch</h3>
              <p className="mt-2 text-sm text-cream/60">
                I&apos;m currently looking for a frontend opportunity. You can reach me through any of the channels below.
              </p>

              <div className="mt-6 space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cream/10">
                      <detail.icon className="h-5 w-5 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-cream/50">{detail.label}</p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-sm font-semibold text-cream transition-colors hover:text-teal"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-cream">{detail.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-cream/10 pt-5">
                <p className="mb-3 text-xs font-medium text-cream/50">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 text-cream/70 transition-all duration-200 hover:bg-teal hover:text-cream"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-cream p-6 shadow-md ring-1 ring-plum/5 dark:bg-[#241d2c] dark:ring-cream/5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-plum dark:text-cream">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={80}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-plum/15 bg-cream px-4 py-2.5 text-sm text-plum placeholder:text-plum/30 dark:border-cream/15 dark:bg-[#1a1520] dark:text-cream dark:placeholder:text-cream/30 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-plum dark:text-cream">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={120}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-plum/15 bg-cream px-4 py-2.5 text-sm text-plum placeholder:text-plum/30 dark:border-cream/15 dark:bg-[#1a1520] dark:text-cream dark:placeholder:text-cream/30 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-plum dark:text-cream">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  maxLength={120}
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full rounded-lg border border-plum/15 bg-cream px-4 py-2.5 text-sm text-plum placeholder:text-plum/30 dark:border-cream/15 dark:bg-[#1a1520] dark:text-cream dark:placeholder:text-cream/30 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-plum dark:text-cream">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={2000}
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg border border-plum/15 bg-cream px-4 py-2.5 text-sm text-plum placeholder:text-plum/30 dark:border-cream/15 dark:bg-[#1a1520] dark:text-cream dark:placeholder:text-cream/30 transition-colors focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-teal/90 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <div role="status" aria-live="polite" className="flex items-center gap-2 rounded-lg bg-teal/10 p-3 text-sm text-teal">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  Your message has been sent! I'll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div role="alert" aria-live="assertive" className="flex items-start gap-2 rounded-lg bg-rose/10 p-3 text-sm text-rose">
                  <AlertCircle className="h-5 w-5 shrink-0" />
                  <div>
                    <p>{errorMsg}</p>
                    <a href={fallbackMailto} className="mt-2 inline-block font-semibold underline underline-offset-2 hover:text-rose/80">
                      Open your email app instead
                    </a>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
