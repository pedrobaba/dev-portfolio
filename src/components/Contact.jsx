import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!emailOk) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactInfo = [
    { Icon: Mail, label: 'Email', value: 'femilanbe@outlook.com', href: 'mailto:femilanbe@outlook.com' },
    { Icon: Phone, label: 'Phone', value: '+2347049000008', href: 'tel:+2347049000008' },
    { Icon: MapPin, label: 'Location', value: 'Remote · Worldwide', href: null },
  ];

  return (
    <section id="contact" className="contact">
      <div className="section-pad container">
        <div className="section-header reveal">
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Contact</p>
          <h2 className="section-title">Let's build something great together</h2>
          <p>Have a project in mind or just want to say hi? Drop me a message and I'll get back within 24 hours.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            {contactInfo.map(({ Icon, label, value, href }) => (
              <div key={label}>
                {href ? (
                  <a href={href} className="contact-info-card">
                    <span className="contact-info-icon">
                      <Icon size={24} />
                    </span>
                    <div>
                      <p className="contact-info-label">{label}</p>
                      <p className="contact-info-value">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="contact-info-card">
                    <span className="contact-info-icon">
                      <Icon size={24} />
                    </span>
                    <div>
                      <p className="contact-info-label">{label}</p>
                      <p className="contact-info-value">{value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="contact-cta-card">
              <h3 className="contact-cta-title">Currently available</h3>
              <p className="contact-cta-text">
                Open to freelance projects, contract work, and full-time opportunities. Typical response time under 24 hours.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form reveal" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, timeline, and budget..."
                className="form-textarea"
              />
            </div>

            {status === 'error' && (
              <div className="form-error">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
            {status === 'success' && (
              <div className="form-success">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>Message sent! I'll be in touch shortly.</span>
              </div>
            )}

            <button type="submit" disabled={status === 'loading'} className="form-submit">
              {status === 'loading' ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
