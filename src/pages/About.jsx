import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const About = () => {
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

  return (
    <main>
      <Helmet>
        <title>About Us | La Bella Tavola - Our Story</title>
        <meta name="description" content="Discover the story of La Bella Tavola. Family traditions, Italian heritage, and a passion for authentic cuisine brought to the heart of London." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">La Nostra Storia</h1>
          <p className="hero-location">Our Story</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>A Family Tradition</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                La Bella Tavola was born from a dream shared by the Rossi family: to bring the
                authentic flavours of their homeland to London. What began as treasured recipes
                passed down through generations has become a beloved destination for those seeking
                genuine Italian cuisine.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Our founder, Nonna Maria, always said that cooking is an act of love. Her philosophy
                lives on in every dish we serve - from the way we hand-roll our pasta each morning
                to the care we take in sourcing the finest ingredients from trusted Italian suppliers.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Today, three generations later, we continue to honour her legacy while embracing
                the vibrant culinary scene of London. We invite you to join our table and become
                part of our extended family.
              </p>
            </div>
            <div>
              <div
                style={{
                  height: '450px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2670&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Our Philosophy</h2>
            <p className="section-subtitle">
              We believe that great food starts with exceptional ingredients. That's why we import
              the finest olive oil from Tuscany, DOP cheeses from Campania, and artisanal pasta
              flour from Puglia. Combined with locally sourced seasonal produce, these ingredients
              form the foundation of our menu.
            </p>
            <div className="celtic-border"></div>
          </div>

          <div className="event-grid reveal" style={{ marginTop: '3rem' }}>
            <div style={{
              background: 'var(--primary-bg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--highlight-gold)',
                borderRadius: '50%',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Fresh Daily</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                Our pasta is made fresh every morning using traditional techniques passed down through generations.
              </p>
            </div>

            <div style={{
              background: 'var(--primary-bg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--highlight-gold)',
                borderRadius: '50%',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Imported Ingredients</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                We source authentic Italian ingredients directly from artisan producers across Italy.
              </p>
            </div>

            <div style={{
              background: 'var(--primary-bg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--highlight-gold)',
                borderRadius: '50%',
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--highlight-gold)" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Made with Love</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>
                Every dish is prepared with the same care and passion as if we were cooking for our own family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-dark">
        <div className="container">
          <div className="two-column reveal" style={{ alignItems: 'center' }}>
            <div>
              <div
                style={{
                  height: '500px',
                  backgroundImage: 'url(https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=2577&auto=format&fit=crop)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
            <div>
              <span style={{ color: 'var(--highlight-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem' }}>
                Meet Our Chef
              </span>
              <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>Marco Rossi</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                Executive Chef Marco Rossi brings over 25 years of culinary experience to La Bella Tavola.
                Trained in the prestigious kitchens of Rome and Florence, Marco's cooking style honours
                traditional Italian techniques while embracing seasonal British produce.
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                "For me, Italian cooking is about simplicity and respect for ingredients. When you start
                with the best, you don't need to do much - just let the flavours speak for themselves."
              </p>
              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                - Chef Marco Rossi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2574&auto=format&fit=crop)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Join Us</h2>
          <p>Experience authentic Italian hospitality</p>
          <Link to="/contact" className="btn btn-primary">Book a Table</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Recognition</h2>
            <p className="section-subtitle">
              We are honoured to have been recognised for our commitment to authentic Italian cuisine
              and exceptional hospitality.
            </p>
            <div className="celtic-border"></div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '2rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>AA</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>2 Rosettes</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '2rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>TripAdvisor</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Certificate of Excellence</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '2rem', color: 'var(--highlight-gold)', fontWeight: '700' }}>Timeout</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Top Italian 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
