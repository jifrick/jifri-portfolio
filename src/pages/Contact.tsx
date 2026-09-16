import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export const Contact: React.FC = () => {
  useReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please complete all required fields before submitting.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/jifri.chakkalan@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again or email jifri.chakkalan@gmail.com directly.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please try again or email jifri.chakkalan@gmail.com directly.');
    }
  };

  return (
    <>
      <SEO
        title="Contact Jifri — Full-Stack Developer"
        description="Have an idea worth building? Let's turn it into something real. Get in touch with Jifri."
      />
      <main className="contact-page page-container">
        <header className="page-header">
          <div className="container reveal">
            <div className="eyebrow">GET IN TOUCH</div>
            <h1 className="page-title">Have an idea worth building?</h1>
            <p className="body-large" style={{ marginTop: '20px', maxWidth: '600px' }}>
              Let's turn it into something real.
            </p>
          </div>
        </header>

        <section className="contact-form-section">
          <div className="container">
            <div className="contact-grid reveal">
              <div className="contact-info">
                <h2 className="info-title">Let's start a conversation.</h2>
                <p className="info-text">
                  Whether you have a product idea, project in development, UI/UX design need, or technical exploration, feel free to reach out.
                </p>

                <div className="info-meta-group">
                  <div className="info-meta">
                    <div className="info-meta-label">DIRECT EMAIL</div>
                    <div className="info-meta-val">
                      <a href="mailto:jifri.chakkalan@gmail.com" className="email-link">
                        jifri.chakkalan@gmail.com ↗
                      </a>
                    </div>
                  </div>

                  <div className="info-meta" style={{ marginTop: '20px' }}>
                    <div className="info-meta-label">LOCATION</div>
                    <div className="info-meta-val">Based in India · Working globally</div>
                  </div>
                </div>
              </div>

              <div className="form-card">
                {status === 'success' ? (
                  <div className="form-state success-state">
                    <div className="state-icon">✓</div>
                    <h3>Message Sent</h3>
                    <p>Thank you for reaching out. Your message has been sent to <strong>jifri.chakkalan@gmail.com</strong>. I will get back to you as soon as possible.</p>
                    <Button onClick={() => setStatus('idle')} variant="secondary" className="reset-btn">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    {status === 'error' && (
                      <div className="form-state error-banner">
                        {errorMessage || 'Please complete all required fields before submitting.'}
                      </div>
                    )}

                    <div className="form-field">
                      <label htmlFor="name" className="field-label">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="email" className="field-label">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="field-input"
                        required
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="message" className="field-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        rows={5}
                        className="field-input textarea"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="submit-btn"
                    >
                      {status === 'submitting' ? 'Sending Message...' : 'Send Message →'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
