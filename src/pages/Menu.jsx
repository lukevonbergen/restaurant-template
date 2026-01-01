import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Re-run reveal animation when activeMenu changes
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
    // Run immediately to reveal elements already in view
    revealOnScroll();
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [activeMenu]);

  // Menu 1: Nibbles, Starters & Main Courses
  const nibbles = [
    { name: "Nibbles", description: "Bread and Nduja, Mix Olives, Bread and Olive Oil", price: "4.50" },
  ];

  const starters = [
    { name: "Focaccia all'aglio", description: "Homemade pizza bread with garlic butter, oregano and rosemary. Extra Mozzarella +2, Nduja +2, Caramelized onion +1.5, Tomato and pesto +2", price: "6.50", tags: ["V", "VG"] },
    { name: "Bruschetta", description: "Toasted bread with fresh chopped tomatoes, oregano, garlic, basil, balsamic glaze and extra virgin olive oil", price: "7.50", tags: ["V", "VG"] },
    { name: "Calamari", description: "Deep fried squid rings, served with Tartare sauce", price: "9.50" },
    { name: "Arancini", description: "Balls of rice with peas, tomato sauce, fresh mozzarella. Served with tomato sauce", price: "10.00", tags: ["V"] },
    { name: "Bianchetti", description: "Deep fried whitebait fish, served with Tartare sauce", price: "9.50" },
    { name: "Polpette dello chef", description: "Handmade meatballs in a rich spicy tomato sauce, mixed peppers, topped with quenelle of mascarpone. Served with toasted bread", price: "10.00", spicy: true },
    { name: "Parma Ham & Burrata", description: "Fresh Burrata from Puglia served with Parma ham, cherry tomato concassé and basil", price: "11.50" },
    { name: "Antipasto Italiano", description: "Parma ham, salami milano, salame piccante, arancini, fresh mozzarella, cherry tomatoes, mixed olives, mixed peppers, cheese, artichokes and toasted bread. Add burrata or buffalo mozzarella for +4 (Ask for a vegetarian version)", price: "20.00" },
    { name: "Gamberoni Dolce Vita", description: "King prawns with cherry tomatoes sauce, white wine, garlic, parsley, spinach, rocket and extra virgin olive oil. Served with toasted bread", price: "10.50" },
    { name: "Salumi & Formaggi", description: "Selection of cured meat and Italian cheese. Served with toasted bread", price: "12.50" },
    { name: "Funghi al Bosco", description: "Baked Portobello mushrooms stuffed with gorgonzola and mozzarella cheese, dressed with garlic, parsley, balsamic glaze and extra virgin olive oil", price: "9.50", tags: ["V"] },
  ];

  const mainCourses = [
    { name: "Pollo Sambuca", description: "Chicken breast in a cream sauce with red onions and sambuca. Served with Tuscan potatoes, garlic spinach and steamed green beans", price: "22.00" },
    { name: "Vitello ai Funghi", description: "Thin sliced Fresh cut topside Italian Veal, cooked with onion and forest mushrooms in a rich white wine, parsley and cream sauce. Served with Tuscan potatoes, garlic spinach and steamed green beans", price: "26.00" },
    { name: "Pollo Cacciatore", description: "Chicken breast in a tomato sauce with chilli, onions, mixed peppers, mushroom, black olives and white wine. Served with Tuscan potatoes and salad garnish", price: "22.00", spicy: true },
    { name: "Zuppa di Pesce", description: "Selection of seafood, Prawns, Squid, Octopus, Mussels and Clam, stewed with spice tomato sauce, white wine, garlic and parsley. Served with toasted bread", price: "25.00" },
    { name: "Spigola al Limone", description: "Pan fried sea bass fillets in a rich lemon butter and white wine sauce with parsley. Served with Tuscan potatoes, garlic spinach and steamed green beans", price: "26.00" },
    { name: "Baccala in Umido", description: "Cod fillet cooked in a Mediterranean sauce of tomatoes, red onion, black olives, capers, garlic and parsley. Served with roasted potatoes, garlic spinach and salad garnish", price: "26.00" },
    { name: "Bistecca", description: "Fresh cut of Ribeye aged 28 days, cooked as your preference. Served with Tuscan potatoes, side salad and homemade peppercorn sauce", price: "30.00" },
    { name: "Tagliata di Manzo", description: "Fresh cut of Ribeye aged 28 days, cooked as your preference carved and laid on a bed of wild rocket salad, shaved grana padano, drizzle of balsamic onion glaze and extra virgin olive oil", price: "28.00" },
  ];

  // Menu 2: Pizza, Calzone, Rustica & Sides
  const pizzas = [
    { name: "Margherita", description: "Tomato, mozzarella and fresh basil", price: "10.50", tags: ["V"] },
    { name: "Prosciutto Funghi", description: "Tomato, mozzarella, cotto ham and mushroom", price: "15.50" },
    { name: "Diavola", description: "Tomato, mozzarella, pepperoni and fresh chilli", price: "14.00", spicy: true },
    { name: "Vulcano", description: "Tomato, mozzarella, pepperoni, red onion, mix peppers, nduja and egg", price: "16.00", spicy: true },
    { name: "Roma", description: "Tomato, mozzarella, spice pepperoni, mixed peppers, mushrooms and red onion", price: "16.00" },
    { name: "Gamberoni e Pesto", description: "Tomato, fiordilatte mozzarella, cherry tomatoes, homemade basil pesto and garlic seasoned tiger prawns", price: "16.00" },
    { name: "Napoli", description: "Tomato, fresh fiordilatte mozzarella, anchovies, capers, black olive, oregano, parsley and garlic oil", price: "14.50" },
    { name: "Vegetariana", description: "Tomato, mozzarella, spinach, mixed peppers, mushrooms, black olive and red onion", price: "16.00", tags: ["V"] },
    { name: "Tropicana", description: "Tomato, mozzarella, cotto ham and pineapple", price: "15.50" },
    { name: "Primavera", description: "Tomato, mozzarella, topped with rocket, cherry tomato, Parma Ham and parmesan", price: "17.00" },
    { name: "Ferrandina", description: "Tomato, fiordilatte mozzarella, meatballs, cherry tomatoes, black olives and basil pesto", price: "16.00" },
    { name: "Sant Elia", description: "Tomato, mozzarella, salami chorizo, gorgonzola, mushroom, and red onion", price: "16.00" },
    { name: "Quattro Gusti", description: "Tomato, mozzarella, gorgonzola, chicken, cotto ham, pepperoni", price: "16.00" },
    { name: "Capricciosa", description: "Tomato, mozzarella, artichokes, cotto ham, black olive and mushroom", price: "16.50" },
  ];

  const calzones = [
    { name: "Calzone di Carne", description: "Tomato, mozzarella, pepperoni, meatballs and chicken", price: "16.50" },
    { name: "Calzone Piccante", description: "Tomato, mozzarella, chicken, chilli, nduja and mushrooms", price: "16.50", spicy: 2 },
  ];

  const rusticas = [
    { name: "Rustica Dolce Vita", description: "Tomato, mozzarella, mascarpone, salami chorizo, roasted peppers, black olives and rocket", price: "16.50" },
    { name: "Rustica Assassina", description: "Tomato, mozzarella, spicy chicken, fresh chilli, nduja, mascarpone and salame piccante", price: "16.50", spicy: 3 },
  ];

  const sides = [
    { name: "French Fries", price: "4.00" },
    { name: "Tuscan Potato", price: "4.00" },
    { name: "Rocket and Parmesan", price: "4.00" },
    { name: "Side Salad", price: "4.00" },
    { name: "Garlic Spinach", price: "4.00" },
    { name: "Sauteed Mushrooms", price: "4.00" },
    { name: "Mixed Vegetables", price: "4.00" },
    { name: "Green Beans", price: "4.00" },
    { name: "Cherry Tomato and Red Onion", price: "4.00" },
    { name: "Side Bread", price: "3.00" },
  ];

  // Menu 3: Pasta & Salads
  const pastas = [
    { name: "Penne Pollo e Funghi", description: "Penne pasta with chicken, mushroom, onion, parsley and gorgonzola cream. Add homemade basil pesto £1.50", price: "16.50" },
    { name: "Spaghetti Pescatore", description: "Spaghetti with mixed seafood, prawns, squid, mussels, octopus, garlic, white wine and Italian red tomato sauce", price: "18.50" },
    { name: "Penne Arrabbiata", description: "Penne pasta in a spicy tomato sauce with chilli, basil, onion and garlic. Add crispy guanciale, chicken £2.50 or prawns £3.50", price: "15.00", tags: ["V", "VG"], spicy: 2 },
    { name: "Linguine Bolognese", description: "A classic dish of Linguine pasta with a traditional Italian handmade Beef Bolognese sauce", price: "16.00" },
    { name: "Spaghetti Carbonara", description: "Spaghetti pasta with Italian Guanciale, Parmesan, black pepper and egg cream", price: "17.00" },
    { name: "Penne alla Boscaiola", description: "Penne pasta tossed in a flavorful tomato sauce made with crumbled Italian pork sausage, mushrooms, and a touch of spicy Calabrian nduja. Garnished with a quenelle of creamy mascarpone cheese", price: "18.00", spicy: true },
    { name: "Spaghetti Gamberi e Acciughe", description: "Spaghetti pasta with prawns and anchovies in a garlic, cherry tomato, white wine and touch of spice tomato sauce", price: "18.50" },
    { name: "Linguine al Granchio", description: "Linguine pasta with crab meat, cherry tomatoes sauce, chilli, parsley, garlic, extra virgin olive oil and white wine", price: "18.50", spicy: true },
    { name: "Linguine Salmone", description: "Linguine pasta with smoked salmon, onions, cherry tomatoes, cream, parsley, a touch of tomato sauce and white wine", price: "17.50" },
    { name: "Linguine Gamberi e Pesto", description: "Linguine pasta with homemade basil pesto, tiger prawns, cherry tomatoes and a touch of cream", price: "18.50" },
    { name: "Linguine alle Vongole", description: "Linguine pasta cooked with white wine, garlic, parsley, extra virgin oil and clams in a shell", price: "18.50" },
    { name: "Tortellini Dolce Vita", description: "Tortellini filled with Ricotta and Spinach, cooked in a delicate sauce of basil, white cream and tomato, topped with homemade basil pesto", price: "17.00", tags: ["V"] },
    { name: "Risotto Asparagi e Funghi", description: "Carnaroli rice cooked with mushrooms, asparagus onion, parsley and creamed with Parmigiano Reggiano. Add Guanciale or Chicken £2.50", price: "16.00", tags: ["V"] },
    { name: "Ravioli di Mazo", description: "Ravioli filled with beef and tomato, in a creamy sauce with mushroom, spinach, onion and bolognese sauce. Add Guanciale or Chicken £2.50", price: "17.00" },
    { name: "Risotto Frutti di Mare", description: "Carnaroli rice cooked with a selection of mixed seafood, prawns, squid, mussels, octopus, white wine, garlic, parsley and a touch of tomato sauce", price: "18.50" },
    { name: "Penne al Forno", description: "Penne pasta cooked in a mushroom sauce with crispy pancetta, spinach, garlic and parsley. Baked in the oven, topped with breadcrumbs and Parmigiano Reggiano", price: "17.00" },
  ];

  const salads = [
    { name: "Classic", description: "Served with avocado, mixed peppers, red onion, cucumber, cherry tomatoes and olives on a baby leaf and rocket salad with a drizzle of balsamic dressing vinegar and extra virgin olive oil", price: "11.00", tags: ["V", "VG"] },
    { name: "Seasoned Grilled Chicken", description: "Classic salad topped with seasoned grilled chicken", price: "16.00" },
    { name: "Crumbled Goats Cheese", description: "Classic salad topped with crumbled goats cheese", price: "16.00" },
    { name: "Tiger Prawns Dolce Vita", description: "Classic salad topped with tiger prawns", price: "16.00" },
  ];

  const MenuItem = ({ name, description, price, tags, spicy }) => (
    <div className="menu-item">
      <div className="menu-item-info">
        <h4 className="menu-item-name">
          {name}
          {tags && tags.map((tag, i) => (
            <span key={i} style={{
              fontSize: '0.7rem',
              marginLeft: '0.5rem',
              padding: '0.15rem 0.4rem',
              background: tag === 'VG' ? 'var(--italian-green)' : 'var(--terracotta)',
              color: 'white',
              borderRadius: '3px',
              fontWeight: '500'
            }}>
              {tag}
            </span>
          ))}
          {spicy && (
            <span style={{ marginLeft: '0.5rem' }}>
              {typeof spicy === 'number' ? '🌶'.repeat(spicy) : '🌶'}
            </span>
          )}
        </h4>
        {description && <p className="menu-item-description">{description}</p>}
      </div>
      <span className="menu-item-price">£{price}</span>
    </div>
  );

  return (
    <main>
      <Helmet>
        <title>Menu | Dolce Vita - Italian Restaurant Wooburn Green</title>
        <meta name="description" content="View the Dolce Vita menu. Authentic Italian cuisine including pizza, pasta, fresh fish, steaks and more. Freshly prepared just like Mamma makes." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero">
        <div
          className="hero-background"
          style={{
            backgroundImage: 'url(/images/pizza.jpg)',
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Our Menu</h1>
          <p className="hero-location">Freshly prepared, just like Mamma makes</p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="section-dark" style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveMenu(1)}
              className={`btn ${activeMenu === 1 ? 'btn-primary' : 'btn-outline'}`}
              style={{ minWidth: '200px' }}
            >
              Starters & Mains
            </button>
            <button
              onClick={() => setActiveMenu(2)}
              className={`btn ${activeMenu === 2 ? 'btn-primary' : 'btn-outline'}`}
              style={{ minWidth: '200px' }}
            >
              Pizza & Calzone
            </button>
            <button
              onClick={() => setActiveMenu(3)}
              className={`btn ${activeMenu === 3 ? 'btn-primary' : 'btn-outline'}`}
              style={{ minWidth: '200px' }}
            >
              Pasta & Salads
            </button>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="section-darker menu-section">
        <div className="container">

          {/* Menu 1: Nibbles, Starters & Main Courses */}
          {activeMenu === 1 && (
            <>
              {/* Nibbles */}
              <div className="menu-category">
                <h2 className="menu-category-title">Nibbles</h2>
                {nibbles.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Starters */}
              <div className="menu-category">
                <h2 className="menu-category-title">Starters</h2>
                {starters.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Main Courses */}
              <div className="menu-category reveal">
                <h2 className="menu-category-title">Main Courses</h2>
                {mainCourses.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </>
          )}

          {/* Menu 2: Pizza, Calzone, Rustica & Sides */}
          {activeMenu === 2 && (
            <>
              {/* Pizza */}
              <div className="menu-category">
                <h2 className="menu-category-title">Pizza</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Homemade 12" pizza dough, baked in a stone base oven. Add burrata or buffalo mozzarella for +4. (Vegan cheese available)
                </p>
                {pizzas.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Calzone */}
              <div className="menu-category reveal">
                <h2 className="menu-category-title">Calzone</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Folded pizza brushed with garlic butter and served with a pot of tomato sauce
                </p>
                {calzones.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Rustica */}
              <div className="menu-category reveal">
                <h2 className="menu-category-title">Rustica</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Long shape pizza served on a board
                </p>
                {rusticas.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Sides */}
              <div className="menu-category reveal">
                <h2 className="menu-category-title">Sides</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.5rem' }}>
                  {sides.map((item, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: '1px solid var(--border-color)' }}>
                      <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                      <span style={{ color: 'var(--terracotta)', fontFamily: "'Cormorant Garamond', serif" }}>£{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Menu 3: Pasta & Salads */}
          {activeMenu === 3 && (
            <>
              {/* Pasta */}
              <div className="menu-category">
                <h2 className="menu-category-title">Pasta</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
                  Gluten free pasta available
                </p>
                {pastas.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>

              {/* Salads */}
              <div className="menu-category reveal">
                <h2 className="menu-category-title">Salads</h2>
                {salads.map((item, index) => (
                  <MenuItem key={index} {...item} />
                ))}
              </div>
            </>
          )}

          {/* Dietary Information */}
          <div className="reveal" style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--primary-bg)', border: '1px solid var(--border-color)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: 0, lineHeight: '1.8' }}>
              <span style={{ padding: '0.15rem 0.4rem', background: 'var(--terracotta)', color: 'white', borderRadius: '3px', marginRight: '0.5rem', fontSize: '0.7rem' }}>V</span> Suitable for Vegetarians
              <span style={{ margin: '0 1rem' }}>|</span>
              <span style={{ padding: '0.15rem 0.4rem', background: 'var(--italian-green)', color: 'white', borderRadius: '3px', marginRight: '0.5rem', fontSize: '0.7rem' }}>VG</span> Suitable for Vegans
              <span style={{ margin: '0 1rem' }}>|</span>
              🌶 Spicy
              <br /><br />
              For any allergen information please contact a member of staff. Our dishes may contain traces of nuts. A discretionary 10% service charge will be added to the bill when dining in. All gratuities go to staff members.
            </p>
          </div>

          {/* Booking CTA */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem', padding: '3rem', background: 'var(--secondary-bg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ color: 'var(--terracotta)', marginBottom: '1rem', fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.75rem' }}>Book a Table</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              See anything you like? We recommend booking to avoid disappointment.
            </p>
            <Link to="/book" className="btn btn-primary">
              Make a Reservation
            </Link>
          </div>

          {/* Note */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Please inform staff of any allergies. Prices may vary. Collection available - call 01628 527942.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
