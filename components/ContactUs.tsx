import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  topic: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const topics = [
    'Sales Inquiry',
    'Broker Accreditation',
    'Career Opportunities',
    'Investor Relations',
    'Supplier Accreditation',
    'Community/Unit Concern',
    'Offer a Property',
    'Others'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      alert('Please accept the data privacy consent to continue.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

     const topicToEmail: Record<string, string> = {
      'Sales Inquiry': 'sales@ovialand.com',
      'Broker Accreditation': 'sales@ovialand.com',
      'Career Opportunities': 'careers@ovialand.com',
      'Investor Relations': 'investorrelations@ovialand.com',
      'Supplier Accreditation': 'purchasing@ovialand.com',
      'Community/Unit Concern': 'customercare@ovialand.com',
      'Offer a Property': 'bdd@ovialand.com',
      'Others': 'mjvaldez108@gmail.com'
    };

    try {
      const recipient = topicToEmail[formData.topic] || 'info@ovialand.com';

      const emailPayload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        topic: formData.topic,
        message: formData.message,
        to_email: recipient,
        date: new Date().toLocaleString('en-PH', { dateStyle: 'long', timeStyle: 'short' }),
      };

      const tryBothServices = async (templateId: string) => {
        try {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            templateId,
            emailPayload,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
        } catch {
          await emailjs.send(
            import.meta.env.VITE_EMAILJS_OUTLOOK_SERVICE_ID,
            templateId,
            emailPayload,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          );
        }
      };

      // 1. Confirmation email to the submitter (OLI-Mail.html)
      await tryBothServices(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      // 2. Inquiry notification to the designated recipient (OLI-Recipient.html)
      await tryBothServices(import.meta.env.VITE_EMAILJS_RECIPIENT_TEMPLATE_ID);

      setSubmitStatus('success');
      setFormData({
        topic: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-us" className="contact-us-section">
      <div className="contact-us-container">
        <div className="contact-us-header">
          
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-us-content">

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="topic">Topic <span className="required">*</span></label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="form-control"
                >
                  <option value="">Select a topic</option>
                  {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="+63 XXX XXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-control"
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <div className="form-group consent-group">
                <label className="consent-label">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="consent-checkbox"
                  />
                  <span className="consent-text">
                    By clicking, you consent to the collection and processing of the following personal 
                    data necessary to address your query. These data are protected under the Data Privacy 
                    Act and our Company's Privacy Notice.
                  </span>
                </label>
              </div>

              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  Thank you for contacting us! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  Something went wrong. Please try again later.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting || !formData.consent}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

          
          <div className="contact-info-wrapper">
            <div className="contact-info-card">
              <h3>Contact Information</h3>

              <div className="contact-section">
                <h4>Office Address</h4>
                <p className="address">
                  2701 Parkway Corporate Center, Filinvest City,
                  <br />
                  Alabang, Muntinlupa City, Metro Manila
                </p>
              </div>

              <div className="contact-section">
                <h4>Phone</h4>
                <p>
                  <a href="tel:0284036864">02 8403 6864</a>
                </p>
              </div>

              <div className="contact-section">
                <h4>Office Hours</h4>
                <p>08:00am to 05:00pm</p>
              </div>

              <div className="contact-section">
                <h4>Email Addresses</h4>
                <div className="email-list">
                  <div className="email-item">
                    <strong>General Inquiry:</strong>
                    <a href="mailto:info@ovialand.com">info@ovialand.com</a>
                  </div>
                  <div className="email-item">
                    <strong>Investor Relations:</strong>
                    <a href="mailto:investorrelations@ovialand.com">investorrelations@ovialand.com</a>
                  </div>
                  <div className="email-item">
                    <strong>Sales Inquiry:</strong>
                    <a href="mailto:sales@ovialand.com">sales@ovialand.com</a>
                  </div>
                  <div className="email-item">
                    <strong>Career Opportunities:</strong>
                    <a href="mailto:careers@ovialand.com">careers@ovialand.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-us-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          min-height: 100vh;
        }

        .contact-us-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-us-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .contact-us-header h2 {
          font-size: 2.5rem;
          color: #16a34a;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .contact-us-header p {
          font-size: 1.125rem;
          color: #4a5568;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-us-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .contact-form-wrapper {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-weight: 600;
          color: #2d3748;
          font-size: 0.95rem;
        }

        .required {
          color: #e53e3e;
        }

        .form-control {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: #31ce60;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        .consent-group {
          margin-top: 8px;
        }

        .consent-label {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          cursor: pointer;
          font-weight: 400;
        }

        .consent-checkbox {
          margin-top: 4px;
          width: 18px;
          height: 18px;
          cursor: pointer;
          flex-shrink: 0;
        }

        .consent-text {
          font-size: 0.875rem;
          color: #4a5568;
          line-height: 1.6;
        }

        .submit-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, #16a34a 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 8px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.4);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .alert {
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.95rem;
          margin-top: -8px;
        }

        .alert-success {
          background: #c6f6d5;
          color: #22543d;
          border: 1px solid #9ae6b4;
        }

        .alert-error {
          background: #fed7d7;
          color: #742a2a;
          border: 1px solid #fc8181;
        }

        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .contact-info-card {
          background: white;
          padding: 28px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .contact-info-card h3 {
          font-size: 1.25rem;
          color: #2d3748;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .contact-info-card p {
          color: #4a5568;
          line-height: 1.8;
          margin: 0;
        }

        .address {
          font-size: 1rem;
        }

        .contact-info-card a {
          color: #84bb4e;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-info-card a:hover {
          color: #84bb4e;
          text-decoration: underline;
        }

        .email-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .email-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .email-item strong {
          color: #2d3748;
          font-size: 0.9rem;
        }

        .email-item a {
          font-size: 0.95rem;
        }

        .contact-section {
          margin-bottom: 16px;
        }

        .contact-info-card h4 {
          font-size: 1rem;
          color: #2d3748;
          margin-bottom: 8px;
          font-weight: 600;
        }

        @media (max-width: 968px) {
          .contact-us-content {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-us-header h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 640px) {
          .contact-us-section {
            padding: 60px 16px;
          }

          .contact-form-wrapper {
            padding: 28px 20px;
          }

          .contact-info-card {
            padding: 24px 20px;
          }

          .contact-us-header h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
