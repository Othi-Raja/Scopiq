import React, { useState } from 'react';
import './Services.css';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Main Course');

  const categories = [
    { name: 'Main Course', color: '#390007' },
    { name: 'Side Dish', color: '#3C070D' },
    { name: 'Appetizers', color: '#390007' },
    { name: 'Desserts', color: '#3C070D' },
    { name: 'YCC Signature Dish', color: '#3C070D' }
  ];

  const menuItems = [
    {
      id: 1,
      name: 'chapati chicken curry',
      price: 'Rs.155',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/d04c0480cd414776d8c9c16fd13c18abd8043d1f?width=2416',
      category: 'Main Course'
    },
    {
      id: 2,
      name: 'dosa with liver curry',
      price: 'Rs.120',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2d53e5d2453746ccf9fa62ebb9311e15e940615f?width=2416',
      category: 'Main Course'
    },
    {
      id: 3,
      name: 'goat leg pepper paya appam',
      price: 'Rs.235',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/38a7976bf44607b7b833bfa0a4d10942a4299108?width=2416',
      category: 'Main Course'
    },
    {
      id: 4,
      name: 'poori meat gravy',
      price: 'Rs.100',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=2416',
      category: 'Main Course'
    },
    {
      id: 5,
      name: 'idli with intestine curry',
      price: 'Rs.195',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2d53e5d2453746ccf9fa62ebb9311e15e940615f?width=2416',
      category: 'Main Course'
    },
    {
      id: 6,
      name: 'tapioca with kakka fry',
      price: 'Rs.285',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/38a7976bf44607b7b833bfa0a4d10942a4299108?width=2416',
      category: 'Main Course'
    },
    {
      id: 7,
      name: 'egg appam chickpea curry',
      price: 'Rs.195',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=2416',
      category: 'Main Course'
    },
    {
      id: 8,
      name: 'ragi set dosa with chutney',
      price: 'Rs.155',
      priceColor: '#009944',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/2d53e5d2453746ccf9fa62ebb9311e15e940615f?width=2416',
      category: 'YCC Signature Dish'
    },
    {
      id: 9,
      name: 'goat leg paya idiyappam',
      price: 'Rs.195',
      priceColor: '#9A0002',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/38a7976bf44607b7b833bfa0a4d10942a4299108?width=2416',
      category: 'Main Course'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="services-page">
      {/* Background Pattern Images */}
      <img 
        className="pattern-bg pattern-bg-1" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/d04c0480cd414776d8c9c16fd13c18abd8043d1f?width=2416" 
        alt=""  
      />
      <img 
        className="pattern-bg pattern-bg-2" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/2d53e5d2453746ccf9fa62ebb9311e15e940615f?width=2416" 
        alt="" 
      />
      <img 
        className="pattern-bg pattern-bg-3" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/38a7976bf44607b7b833bfa0a4d10942a4299108?width=2416" 
        alt="" 
      />
      <img 
        className="pattern-bg pattern-bg-4" 
        src="https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=2416" 
        alt="" 
      />

      {/* Navbar */}
      <header className="services-navbar">
        <img 
          className="services-logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/ef390299b5e0b9ae9317dd53d16818af88a21e09?width=615" 
          alt="Yatra's Cooking Cave Logo" 
        />
        <nav className="services-nav">
          <div className="services-nav-item">HOME</div>
          <div className="services-nav-item">ABOUT US</div>
          <div className="services-nav-item">SERVICES</div>
          <div className="services-nav-item">ORDER NOW</div>
          <div className="services-nav-item">CONTACT US</div>
        </nav>
      </header>

      {/* Main Title */}
      <h1 className="services-main-title">OUR MENU</h1>
      <p className="services-subtitle">Discover authentic indian dish lost through time</p>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`category-filter ${activeCategory === category.name ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.name)}
          >
            <div 
              className="category-dot" 
              style={{ backgroundColor: category.color }}
            ></div>
            {category.name}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item">
            <div 
              className="menu-item-image"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="price-badge">
                <span style={{ color: item.priceColor }}>-{item.price}/-</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
