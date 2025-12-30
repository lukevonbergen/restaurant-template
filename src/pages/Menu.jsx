import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Menu = () => {
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

  const antipasti = [
    { name: "Bruschetta Classica", description: "Toasted ciabatta, fresh tomatoes, garlic, basil, extra virgin olive oil", price: "9.50" },
    { name: "Burrata Pugliese", description: "Creamy burrata, San Marzano tomatoes, aged balsamic, basil pesto", price: "14.00" },
    { name: "Carpaccio di Manzo", description: "Thinly sliced beef fillet, rocket, parmesan shavings, truffle oil", price: "15.50" },
    { name: "Calamari Fritti", description: "Crispy fried squid, lemon aioli, fresh herbs", price: "13.00" },
    { name: "Antipasto Misto", description: "Selection of Italian cured meats, cheeses, olives, grilled vegetables", price: "18.00" },
  ];

  const pasta = [
    { name: "Tagliatelle al Ragù", description: "Hand-cut tagliatelle, slow-cooked Bolognese ragù, parmesan", price: "18.00" },
    { name: "Spaghetti alle Vongole", description: "Spaghetti, fresh clams, white wine, garlic, chilli, parsley", price: "22.00" },
    { name: "Risotto ai Funghi Porcini", description: "Arborio rice, wild porcini mushrooms, truffle oil, parmesan", price: "19.00" },
    { name: "Pappardelle al Cinghiale", description: "Wide ribbon pasta, wild boar ragù, rosemary, pecorino", price: "21.00" },
    { name: "Ravioli di Ricotta e Spinaci", description: "Handmade ravioli, sage butter, toasted pine nuts", price: "17.00" },
    { name: "Linguine all'Astice", description: "Linguine, half lobster, cherry tomatoes, white wine, garlic", price: "32.00" },
    { name: "Gnocchi alla Sorrentina", description: "Potato gnocchi, tomato sauce, mozzarella, fresh basil", price: "16.00" },
  ];

  const pizza = [
    { name: "Margherita D.O.P.", description: "San Marzano tomatoes, fior di latte, fresh basil, olive oil", price: "14.00" },
    { name: "Diavola", description: "Tomato, mozzarella, spicy 'nduja, Calabrian chillies, honey drizzle", price: "16.00" },
    { name: "Quattro Formaggi", description: "Mozzarella, gorgonzola, taleggio, parmesan, truffle honey", price: "17.00" },
    { name: "Prosciutto e Rucola", description: "Tomato, mozzarella, Parma ham, rocket, parmesan shavings", price: "18.00" },
    { name: "Tartufo", description: "Fior di latte, wild mushrooms, black truffle, truffle oil", price: "22.00" },
  ];

  const secondi = [
    { name: "Branzino al Forno", description: "Whole roasted sea bass, lemon, capers, new potatoes, green beans", price: "28.00" },
    { name: "Filetto di Manzo", description: "8oz beef fillet, roasted vine tomatoes, rocket, aged balsamic", price: "34.00" },
    { name: "Pollo alla Milanese", description: "Breaded chicken breast, spaghetti pomodoro, fresh basil", price: "22.00" },
    { name: "Ossobuco alla Milanese", description: "Braised veal shank, saffron risotto, gremolata", price: "32.00" },
    { name: "Saltimbocca alla Romana", description: "Veal escalope, Parma ham, sage, white wine, butter", price: "26.00" },
  ];

  const contorni = [
    { name: "Patate al Rosmarino", description: "Roasted rosemary potatoes", price: "5.50" },
    { name: "Spinaci all'Aglio", description: "Sautéed spinach, garlic, chilli", price: "5.00" },
    { name: "Insalata Mista", description: "Mixed leaves, balsamic dressing", price: "5.00" },
    { name: "Verdure Grigliate", description: "Grilled seasonal vegetables", price: "6.00" },
    { name: "Funghi Trifolati", description: "Sautéed wild mushrooms, garlic, parsley", price: "6.50" },
  ];

  const dolci = [
    { name: "Tiramisù", description: "Classic mascarpone, espresso, Savoiardi, cocoa", price: "9.00" },
    { name: "Panna Cotta", description: "Vanilla panna cotta, seasonal berry compote", price: "8.00" },
    { name: "Cannoli Siciliani", description: "Crispy pastry tubes, sweet ricotta, pistachios, chocolate", price: "8.50" },
    { name: "Affogato al Caffè", description: "Vanilla gelato, hot espresso, amaretti", price: "7.00" },
    { name: "Torta al Cioccolato", description: "Warm chocolate fondant, vanilla gelato", price: "9.50" },
  ];

  const MenuItem = ({ name, description, price }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h4 className="menu-item-name">{name}</h4>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      <span className="menu-item-price">£{price}</span>
    </div>
  );

  return (
    <main>
      <Helmet>
        <title>Menu | La Bella Tavola - Italian Restaurant London</title>
        <meta name="description" content="Explore our authentic Italian menu featuring fresh pasta, wood-fired pizza, and traditional dishes. Made with the finest imported ingredients at La Bella Tavola." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&w=2670&auto=format&fit=crop)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Il Menu</h1>
          <p className="hero-location">Authentic Italian cuisine</p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-dark menu-section">
        <div className="container">
          {/* Antipasti */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Antipasti</h2>
            {antipasti.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Pasta & Risotti */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Pasta & Risotti</h2>
            {pasta.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Pizza */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Pizza</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
              All pizzas made with our signature 48-hour fermented dough, baked in our wood-fired oven
            </p>
            {pizza.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Secondi */}
          <div className="menu-category reveal">
            <h2 className="menu-category-title">Secondi</h2>
            {secondi.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>

          {/* Two Column - Contorni & Dolci */}
          <div className="two-column" style={{ marginTop: '4rem' }}>
            <div className="menu-category reveal">
              <h2 className="menu-category-title">Contorni</h2>
              {contorni.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            <div className="menu-category reveal">
              <h2 className="menu-category-title">Dolci</h2>
              {dolci.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Wine Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--secondary-bg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--highlight-gold)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>La Carta dei Vini</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Our extensive wine list features carefully selected Italian wines from renowned regions
              including Tuscany, Piedmont, and Sicily. Ask our sommelier for recommendations.
            </p>
          </div>

          {/* Allergy Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Please inform your server of any allergies or dietary requirements. A discretionary 12.5% service charge will be added to your bill.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
