import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  // Scroll reveal animation
  useEffect(() => {
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
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <main>
      <Helmet>
        <title>La Bella Tavola | Authentic Italian Restaurant London</title>
        <meta name="description" content="La Bella Tavola - Experience authentic Italian cuisine in the heart of London. Fresh pasta, wood-fired pizza, and traditional recipes from Italy. Book your table today." />
        <meta name="keywords" content="Italian restaurant London, authentic Italian food, pasta, pizza, fine dining, La Bella Tavola, Italian cuisine" />
        <meta property="og:title" content="La Bella Tavola | Authentic Italian Restaurant" />
        <meta property="og:description" content="Experience authentic Italian cuisine in the heart of London. Fresh pasta, wood-fired pizza, and traditional recipes." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://labellatavola.co.uk" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle animate-fade-in-up">Authentic Italian Cuisine</p>
          <h1 className="hero-title animate-fade-in-up animate-delay-1">La Bella Tavola</h1>
          <p className="hero-location animate-fade-in-up animate-delay-2">London</p>
        </div>

        {/* Quick Actions Bar */}
        <div className="quick-actions">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="quick-action">
            Mayfair, London
          </a>
          <Link to="/menu" className="quick-action">
            View Menu
          </Link>
          <a href="tel:02079460958" className="quick-action">
            020 7946 0958
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Benvenuti</h2>
            <p className="section-subtitle">
              Welcome to La Bella Tavola, where the rich traditions of Italian cooking meet the
              vibrant heart of London. Our family recipes have been passed down through generations,
              bringing the authentic flavours of Italy to your table.
            </p>
            <p className="section-subtitle" style={{ marginTop: '1rem' }}>
              Every dish is crafted with love, using the finest imported ingredients and time-honoured techniques.
            </p>
            <div className="celtic-border"></div>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1556761223-4c4282c73f77?q=80&w=2565&auto=format&fit=crop)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Fresh Pasta</h3>
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Wood-Fired Pizza</h3>
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2670&auto=format&fit=crop)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Fine Wines</h3>
              <Link to="/menu" className="btn btn-primary">Wine List</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Food Philosophy Section */}
      <section className="section-dark food-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">La Nostra Cucina</h2>
            <p className="section-subtitle">
              Our kitchen is guided by a simple philosophy: respect for ingredients, passion for tradition,
              and dedication to excellence. From hand-rolled pasta to slow-simmered ragù, every dish
              tells the story of Italian culinary heritage.
            </p>
            <div className="celtic-border"></div>
            <Link to="/menu" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Chef's Special Banner */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>Chef's Specials</h2>
          <p>Seasonal dishes crafted with the freshest ingredients</p>
          <Link to="/menu" className="btn btn-primary">View Specials</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Discover La Bella Tavola</h2>
            <p className="section-subtitle">
              Whether it's an intimate dinner for two, a family celebration, or a special occasion,
              we offer the perfect setting for every moment.
            </p>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Private Dining</h4>
                <p>Exclusive spaces for intimate gatherings and special celebrations with bespoke menus.</p>
                <Link to="/private-dining" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Learn More
                </Link>
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
                <h4>Sunday Lunch</h4>
                <p>A leisurely Italian feast featuring traditional family-style dishes every Sunday.</p>
                <Link to="/menu" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  View Menu
                </Link>
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
                <h4>Aperitivo Hour</h4>
                <p>Join us from 5-7pm for classic Italian cocktails and complimentary cicchetti.</p>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Dining Banner */}
      <section className="split-banner">
        <div className="split-banner-images">
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?q=80&w=2670&auto=format&fit=crop)',
            }}
          ></div>
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2670&auto=format&fit=crop)',
            }}
          ></div>
        </div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <h2>Private Events</h2>
          <p>Create unforgettable memories with us</p>
          <Link to="/private-dining" className="btn btn-primary">Enquire Now</Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Stay Connected</h2>
            <p className="section-subtitle">
              Subscribe to receive exclusive offers, seasonal menu updates, and invitations to special events.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
