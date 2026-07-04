import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xxx';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxx';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_xxx';

const RedInit = ({ children }) => (
  <span className="brand-red">{children}</span>
);

const contactItems = [
  {
    label: 'Location',
    icon: '⌖',
    value: 'Ernakulam & Chennai'
  },
  {
    label: 'Email',
    icon: '✉',
    value: <a href="mailto:contact@innoflow.in">contact@innoflow.in</a>
  },
  {
    label: 'Call',
    icon: '⌕',
    value: (
      <>
        <a href="tel:+918438608164">+91 84386 08164</a><br />
        <a href="tel:+919995300599">+91 99953 00599</a>
      </>
    )
  },
  {
    label: 'Registered Address',
    icon: '⌂',
    value: (
      <>
        Manelil, Victory lane, <br />
        Marakkar Road, Edappally<br />
        Kochi, Kerala-682024, India
      </>
    )
  }
];

const inputStyle = {
  width: '100%',
  padding: '13px 15px',
  border: '1px solid rgba(255,255,255,0.14)',
  borderRadius: '8px',
  background: 'rgba(255,255,255,0.05)',
  color: '#edf6fb',
  outline: 'none'
};

const labelStyle = {
  display: 'block',
  color: '#b8d4e1',
  fontWeight: 600,
  marginBottom: '7px'
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [sending, setSending] = useState(false);

  const selectStyle = {
    ...inputStyle,
    background: 'rgba(10, 25, 45, 0.98)',
    color: '#ffffff'
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, company, service, message } = formData;

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all required fields before sending.');
      return;
    }

    setSending(true);
    setStatusMessage('Sending your message...');

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        company_name: company || 'N/A',
        service_interest: service || 'N/A',
        message: message
      },
      EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatusMessage('Message sent successfully. Thank you!');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setSending(false);
    })
    .catch((error) => {
      console.error('EmailJS send error:', error);
      setStatusMessage('Failed to send your message. Please try again later.');
      setSending(false);
    });
  };

  return (
    <section style={{
      minHeight: '100vh',
      padding: '130px 0 80px',
      background: 'var(--color-background)',
      color: '#ffffff'
    }}>
      <div style={{maxWidth: '1500px', margin: '0 auto', padding: '0 24px'}}>
        <div style={{textAlign: 'center', marginBottom: '55px'}}>
          <h1 className="heading-font about-title" style={{
            margin: '0 0 16px',
            color: '#ffffff',
            fontWeight: 700
          }}>
            <RedInit>G</RedInit>et In <RedInit>T</RedInit>ouch
          </h1>
          <p className="page-subtitle" style={{
            maxWidth: '760px',
            margin: '0 auto',
            color: '#b8d4e1',
            lineHeight: 1.6
          }}>
            Tell us about your engineering challenge, simulation requirement, or product development idea.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 0.75fr) minmax(320px, 1.25fr)',
          gap: '48px',
          alignItems: 'stretch'
        }} className="contact-compact-grid">
          <aside style={{
            padding: '30px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.09)',
            height: '100%'
          }}>
            <h2 className="heading-font card-title" style={{
              margin: '0 0 24px',
              color: '#ffffff',
              fontWeight: 700
            }}>
             <RedInit>C</RedInit>ontact <RedInit>D</RedInit>etails
            </h2>

            <div style={{display: 'grid', gap: '30px'}}>
              {contactItems.map((item) => (
                <div key={item.label} style={{display: 'flex', gap: '16px', alignItems: 'flex-start'}}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '6px',
                    background: '#b60909',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 700,
                    lineHeight: 1,
                    textAlign: 'center',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="heading-font card-title" style={{
                      margin: '0 0 4px',
                      color: '#ffffff',
                      fontWeight: 700
                    }}>
                      {item.label}:
                    </p>
                    <div style={{color: '#edf6fb', lineHeight: 1.55}}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form onSubmit={handleSubmit} style={{
            display: 'grid',
            gap: '18px',
            padding: '30px',
            borderRadius: '10px',
            background: 'rgba(255,255,255,0.045)',
            border: '1px solid rgba(255,255,255,0.09)',
            height: '100%'
          }}>
            <h2 className="heading-font card-title" style={{
              margin: '0 0 6px',
              color: '#ffffff',
              fontWeight: 700
            }}>
             <RedInit>S</RedInit>end a <RedInit>M</RedInit>essage
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '16px'
            }} className="contact-form-row">
              <label>
                <span style={labelStyle}>Name *</span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span style={labelStyle}>Email *</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  style={inputStyle}
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
              gap: '16px'
            }} className="contact-form-row">
              <label>
                <span style={labelStyle}>Company</span>
                <input
                  type="text"
                  name="company"
                  placeholder="Company or organization"
                  style={inputStyle}
                  value={formData.company}
                  onChange={handleChange}
                />
              </label>

              <label>
                <span style={labelStyle}>Service Interest</span>
                <select
                  name="service"
                  style={selectStyle}
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="consulting">Engineering Consulting</option>
                  <option value="simulation">CFD, Structural & Multiphysics Simulation</option>
                  <option value="development">Product Development</option>
                  <option value="optimization">Simulation-Driven Design Optimization</option>
                  <option value="testing">Testing, Diagnostics & Failure Investigation</option>
                  <option value="tools">Custom Engineering Tools</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <label>
              <span style={labelStyle}>Message *</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Briefly describe your requirement, timeline, and technical challenge."
                style={{...inputStyle, resize: 'vertical'}}
                value={formData.message}
                onChange={handleChange}
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              style={{
                justifySelf: 'start',
                minWidth: '180px',
                minHeight: '44px',
                padding: '11px 24px',
                borderRadius: '6px',
                background: sending ? '#91d7f7' : '#3cb4e1',
                color: '#ffffff',
                fontWeight: 700,
                border: 'none',
                cursor: sending ? 'not-allowed' : 'pointer',
                boxShadow: '0 8px 22px rgba(60, 180, 225, 0.28)'
              }}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {statusMessage && (
              <p style={{
                margin: '0',
                color: sending ? '#b8d4e1' : '#edf6fb',
                fontSize: '0.95rem'
              }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
