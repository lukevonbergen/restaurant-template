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

  const testimonials = [
    {
      name: "Sheline Constant",
      rating: 5,
      text: "The food and the customer service was very lovely. I would recommend you book before going because we had to wait a while. Very pricey but worth it."
    },
    {
      name: "Tel Kane",
      rating: 5,
      text: "Amazing restaurant, great atmosphere. I would highly recommend them, will definitely be returning."
    },
    {
      name: "Fraser Chapman",
      rating: 4,
      text: "Great food & wonderful staff. I ate here yesterday for my sister's 50th birthday. The venue itself is large, modern and clean. We were greeted by a polite Italian man with a passion for Italian football. The food is fantastic. I have eaten in many Italian restaurants and the food here is right up there with the best."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Dolce Vita | Italian Restaurant Wooburn Green, High Wycombe</title>
        <meta name="description" content="Dolce Vita - The heart of Italy, in the heart of Wooburn Green. Award-winning Italian restaurant serving freshly prepared authentic Italian food. Book your table today." />
        <meta name="keywords" content="Italian restaurant Wooburn Green, Italian food High Wycombe, Dolce Vita, pizza, pasta, Italian cuisine Buckinghamshire" />
        <meta property="og:title" content="Dolce Vita | Italian Restaurant Wooburn Green" />
        <meta property="og:description" content="The heart of Italy, in the heart of Wooburn Green. Award-winning Italian restaurant serving authentic Italian food." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://dolcevita-wooburn.co.uk" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://static.where-e.com/United_Kingdom/Dolce-Vita_ee84b00075863028fea80e5ab31d2427.jpg)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle animate-fade-in-up">Welcome to</p>
          <h1 className="hero-title animate-fade-in-up animate-delay-1">Dolce Vita</h1>
          <p className="hero-location animate-fade-in-up animate-delay-2">Wooburn Green</p>
        </div>

        {/* Quick Actions Bar */}
        <div className="quick-actions">
          <a href="https://maps.google.com/?q=53+The+Green+Wooburn+Green+HP10+0EU" target="_blank" rel="noopener noreferrer" className="quick-action">
            Wooburn Green
          </a>
          <Link to="/book" className="quick-action">
            Book a Table
          </Link>
          <a href="tel:01628527942" className="quick-action">
            01628 527942
          </a>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Welcome</h2>
            <p className="section-subtitle">
              The heart of Italy, in the heart of Wooburn Green
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-darker">
        <div className="container">
          <div className="two-column reveal" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>We at Dolce Vita</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                bring you the taste of freshly prepared Italian foods, made from specially sourced
                quality ingredients, just like "Mamma Makes".
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Bringing you the authentic Italian experience, the charming Dolce Vita staff create
                a marvellous, warm and friendly atmosphere, in their award winning restaurant.
              </p>
              <p style={{ color: 'var(--terracotta)', fontStyle: 'italic', fontSize: '1.35rem', marginBottom: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>
                Eat. Live. Love. Share the passion
              </p>
              <Link to="/menu" className="btn btn-outline">
                View Our Menu
              </Link>
            </div>
            <div>
              <div
                style={{
                  height: '400px',
                  backgroundImage: 'url(https://media-cdn.tripadvisor.com/media/photo-s/07/2c/11/94/dolce.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid var(--border-color)',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* It's Not Just Pizza Section */}
      <section className="banner">
        <div
          className="banner-bg"
          style={{
            backgroundImage: 'url(/images/pizza.jpg)',
          }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <div className="celtic-border" style={{ marginBottom: '2rem' }}></div>
          <h2>It's Not Just About Pizza</h2>
          <p>Discover our full range of authentic Italian dishes</p>
          <Link to="/menu" className="btn btn-primary">View Menu</Link>
          <div className="celtic-border" style={{ marginTop: '2rem' }}></div>
        </div>
      </section>

      {/* Our Services */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Our Services</h2>
            <div className="celtic-border"></div>
          </div>

          <div className="event-grid reveal">
            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/lamb.jpg)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>View Our Menu</h4>
                <p>See anything you like the look of? Why not join us for a delicious meal.</p>
                <Link to="/menu" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  View Menu
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/wine.jpg)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Reservation</h4>
                <p>Request a reservation. Call us on 01628 527942 to book your table.</p>
                <Link to="/book" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Book Now
                </Link>
              </div>
            </div>

            <div className="event-card">
              <div
                className="event-card-image"
                style={{
                  backgroundImage: 'url(/images/shrimp.jpg)',
                }}
              ></div>
              <div className="event-card-content">
                <h4>Collection</h4>
                <p>Simply order by phone or come in and place your order. Credit card payments welcome.</p>
                <a href="tel:01628527942" className="btn btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Bar */}
      <section className="section-darker">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">Licensed Bar</h2>
            <p className="section-subtitle">
              Relax on our patio with a drink, or enjoy a glass of wine with your meal.
              Fully licensed bar available.
            </p>
            <div className="celtic-border"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/pizza.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Pizza</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Authentic Italian</p>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/lamb.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Lamb</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Tender & Succulent</p>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/tuna-steak.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Tuna Steak</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Fresh from the Sea</p>
            </div>
          </div>
        </div>
      </section>

      {/* More Gallery */}
      <section style={{ padding: 0 }}>
        <div className="feature-grid">
          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/shrimp.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Shrimp</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Perfectly Prepared</p>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/swordfish.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Swordfish</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Catch of the Day</p>
            </div>
          </div>

          <div className="feature-card reveal">
            <div
              className="feature-card-bg"
              style={{
                backgroundImage: 'url(/images/wine.jpg)',
              }}
            ></div>
            <div className="feature-card-overlay"></div>
            <div className="feature-card-content">
              <h3>Fine Wines</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Licensed Bar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-dark">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="celtic-border"></div>
          </div>

          <div className="event-grid reveal">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="event-card"
                style={{ background: 'var(--secondary-bg)' }}
              >
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        style={{
                          color: i < testimonial.rating ? 'var(--terracotta)' : 'var(--text-muted)',
                          fontSize: '1.25rem'
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                    "{testimonial.text}"
                  </p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="split-banner">
        <div className="split-banner-images">
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(/images/swordfish.jpg)',
            }}
          ></div>
          <div
            className="split-image"
            style={{
              backgroundImage: 'url(/images/tuna-steak.jpg)',
            }}
          ></div>
        </div>
        <div className="banner-overlay"></div>
        <div className="banner-content reveal">
          <h2>Make a Reservation</h2>
          <p>Call 01628 527942 to book your table</p>
          <Link to="/book" className="btn btn-primary">Book Now</Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
