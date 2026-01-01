import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    const reveals = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will be in touch shortly.');
  };

  return (
    <main>
      <Helmet>
        <title>Contact | Dolce Vita - Italian Restaurant Wooburn Green</title>
        <meta name="description" content="Contact Dolce Vita Italian restaurant in Wooburn Green. Find our address, phone number, opening hours and send us a message. We value your feedback." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/wine.jpg)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-location">We'd love to hear from you</p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-subtitle">
              At Dolce Vita we always strive to give our customers the best dining experience we can.
              We hope you have had a fantastic time at our establishment and we value your feedback.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit} style={{ maxWidth: '100%' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message goes here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div style={{ paddingLeft: '2rem' }}>
              <h2 style={{ marginBottom: '2rem' }}>Find Us</h2>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--terracotta)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Address
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Dolce Vita<br />
                  53 The Green<br />
                  Wooburn Green<br />
                  High Wycombe<br />
                  HP10 0EU
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--terracotta)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Phone
                </h3>
                <a href="tel:01628527942" style={{ color: 'var(--text-primary)', fontSize: '1.25rem' }}>
                  01628 527942
                </a>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--terracotta)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Opening Hours
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong>Monday:</strong> Closed<br />
                  <strong>Tue - Saturday:</strong> 12:00pm - 2:30pm, 5:30pm - 9:30pm<br />
                  <strong>Sunday:</strong> 12:00pm - 3:30pm
                </p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: 'var(--terracotta)', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                  Payment
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Cash and Card payments accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Location</h2>
            <p className="section-subtitle">
              We're located on The Green in the heart of Wooburn Green, High Wycombe.
            </p>
          </div>

          <div className="map-container reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2475.8!2d-0.7!3d51.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDM0JzQ4LjAiTiAwwrA0MicwMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dolce Vita Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Follow Us</h2>
            <p className="section-subtitle">
              Stay updated with our latest news and special offers.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '0.5rem' }}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
