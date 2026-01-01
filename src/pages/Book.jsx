import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
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
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking request! Please call 01628 527942 to confirm your reservation.');
  };

  return (
    <main>
      <Helmet>
        <title>Book a Table | Dolce Vita - Italian Restaurant Wooburn Green</title>
        <meta name="description" content="Book a table at Dolce Vita Italian restaurant in Wooburn Green. Make a reservation online or call us on 01628 527942." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/lamb.jpg)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Make a Reservation</h1>
          <p className="hero-location">Book your table today</p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div style={{
              background: 'var(--secondary-bg)',
              border: '2px solid var(--terracotta)',
              padding: '2rem',
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <h3 style={{ color: 'var(--terracotta)', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.5rem' }}>Important</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                We are currently experiencing problems with online booking email confirmations.
              </p>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: '600' }}>
                Please call <a href="tel:01628527942" style={{ color: 'var(--terracotta)' }}>01628 527942</a> to confirm your booking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Reservation Request</h2>
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
                  <label className="form-label" htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="date">Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="time">Time *</label>
                    <select
                      id="time"
                      name="time"
                      className="form-select"
                      value={formData.time}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select time</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="guests">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    className="form-select"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select party size</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8+ people</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any special requests or dietary requirements..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Request Reservation
                </button>
              </form>
            </div>

            <div className="booking-sidebar">
              <div className="info-card">
                <h3 className="info-card-title">Call to Book</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  For immediate confirmation, give us a call:
                </p>
                <a href="tel:01628527942" className="phone-number">
                  01628 527942
                </a>
              </div>

              <div className="info-card">
                <h3 className="info-card-title">Opening Hours</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  <strong>Monday:</strong> Closed<br />
                  <strong>Tue - Saturday:</strong><br />
                  Lunch: 12:00pm - 2:30pm<br />
                  Dinner: 5:30pm - 9:30pm<br />
                  <strong>Sunday:</strong> 12:00pm - 3:30pm
                </p>
              </div>

              <div className="info-card">
                <h3 className="info-card-title">Find Us</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                  Dolce Vita<br />
                  53 The Green<br />
                  Wooburn Green<br />
                  High Wycombe<br />
                  HP10 0EU
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Book;
