import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const PrivateDining = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
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
    alert('Thank you for your enquiry! We will be in touch shortly to discuss your event.');
  };

  const features = [
    'Exclusive private dining room',
    'Bespoke tasting menus',
    'Curated wine pairings',
    'Dedicated service team',
    'Personalised menu cards',
  ];

  return (
    <main>
      <Helmet>
        <title>Private Dining | La Bella Tavola - Events & Celebrations</title>
        <meta name="description" content="Host your private event at La Bella Tavola. Intimate private dining rooms, bespoke Italian menus, and impeccable service for celebrations, corporate events, and special occasions." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Private Dining</h1>
          <p className="hero-location">Celebrate in style</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">La Sala Privata</h2>
            <p className="section-subtitle">
              Our elegant private dining room provides the perfect setting for intimate celebrations,
              business dinners, and special occasions. Nestled away from the main restaurant, enjoy
              an exclusive Italian dining experience with your guests.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Whether you're celebrating a milestone birthday, hosting a corporate event, or planning
              a rehearsal dinner, our team will craft an unforgettable experience tailored to your vision.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>What We Offer</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 0',
                      borderBottom: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2670&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Bespoke Menus</h2>
            <p className="section-subtitle">
              Our executive chef will work with you to create a bespoke menu for your event.
              From intimate tasting menus to generous family-style feasts, we offer flexibility
              to suit your preferences and dietary requirements.
            </p>
            <div className="celtic-border"></div>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2670&auto=format&fit=crop)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Tasting Menu</h4>
                <p>A refined journey through Italian cuisine with carefully paired wines.</p>
                <span style={{ color: 'var(--highlight-gold)', fontSize: '1.1rem', fontWeight: '600' }}>From £85 per person</span>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2532&auto=format&fit=crop)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Family-Style Feast</h4>
                <p>Generous sharing platters for a convivial Italian dining experience.</p>
                <span style={{ color: 'var(--highlight-gold)', fontSize: '1.1rem', fontWeight: '600' }}>From £65 per person</span>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2529&auto=format&fit=crop)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Canapé Reception</h4>
                <p>Elegant Italian-inspired canapés and prosecco for cocktail events.</p>
                <span style={{ color: 'var(--highlight-gold)', fontSize: '1.1rem', fontWeight: '600' }}>From £45 per person</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capacity */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Our Space</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '500px',
              margin: '2rem auto 0',
            }}>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--primary-bg)',
                border: '1px solid var(--border-color)',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>24</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Seated</span>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'var(--primary-bg)',
                border: '1px solid var(--border-color)',
              }}>
                <span style={{ display: 'block', fontSize: '3rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>35</span>
                <span style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Reception</span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
              Minimum of 8 guests for private dining room bookings
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Enquire Now</h2>
            <p className="section-subtitle">
              Fill out the form below and our events team will be in touch to discuss your requirements.
            </p>
          </div>

          <div className="two-column reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
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
                <label className="form-label" htmlFor="phone">Phone</label>
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
                <label className="form-label" htmlFor="eventType">Event Type *</label>
                <select
                  id="eventType"
                  name="eventType"
                  className="form-select"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select event type</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="corporate">Corporate Dinner</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="engagement">Engagement / Wedding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="guests">Number of Guests *</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  className="form-input"
                  value={formData.guests}
                  onChange={handleChange}
                  min="8"
                  max="35"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-input"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event, dietary requirements, or any special requests..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Enquiry
              </button>
            </form>

            <div style={{ paddingLeft: '2rem' }}>
              <div style={{
                background: 'var(--secondary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
                marginBottom: '2rem',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Speak to Our Events Team
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Call us to discuss your requirements:
                </p>
                <a href="tel:02079460958" style={{ color: 'var(--text-primary)', fontSize: '1.5rem', fontWeight: '600' }}>
                  020 7946 0958
                </a>
              </div>

              <div style={{
                background: 'var(--secondary-bg)',
                padding: '2rem',
                border: '1px solid var(--border-color)',
              }}>
                <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1rem' }}>
                  Email Us
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  For event enquiries:
                </p>
                <a href="mailto:events@labellatavola.co.uk" style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>
                  events@labellatavola.co.uk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivateDining;
