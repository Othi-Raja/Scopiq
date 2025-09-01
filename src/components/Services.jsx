import React, { useState } from 'react';
import './Services.css';
import Navbar from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { Height } from '@mui/icons-material';
import duckcurru from '../assets/duckcurry.jpg'
import biriyaniwithraita from '../assets/biriyaniwithraita.jpg'
import goatlegpayaidiyappam from '../assets/goatlegpayaidiyappam.jpg'
import muttoncurrwithrice from '../assets/muttoncurrwithrice.jpg'
import chapathichickencurry from '../assets/chapathichickencurry.jpg'
import Footer from './Footer';
const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Main Course');
  const dispatch = useDispatch();
  const categories = [
    { name: 'Main Course', color: '#390007' },
    { name: 'Side Dish', color: '#3C070D' },
    { name: 'Appetizers', color: '#390007' },
    { name: 'Desserts', color: '#3C070D' },
    { name: 'YCC Signature Dish', color: '#3C070D' }
  ];
  const menuItems = [
    {
      "id": 1,
      "name": "chapati chicken curry",
      "price": "Rs.155",
      "priceColor": "#9A0002",
      "image": duckcurru,
      "category": "Main Course"
    },
    {
      "id": 2,
      "name": "dosa with liver curry",
      "price": "Rs.120",
      "priceColor": "#9A0002",
      "image": biriyaniwithraita,
      "category": "Main Course"
    },
    {
      "id": 3,
      "name": "goat leg pepper paya appam",
      "price": "Rs.235",
      "priceColor": "#9A0002",
      "image": biriyaniwithraita,
      "category": "Main Course"
    },
    {
      "id": 4,
      "name": "poori meat gravy",
      "price": "Rs.100",
      "priceColor": "#9A0002",
      "image": biriyaniwithraita,
      "category": "Main Course"
    },
    {
      "id": 5,
      "name": "idli with intestine curry",
      "price": "Rs.195",
      "priceColor": "#9A0002",
      "image": goatlegpayaidiyappam,
      "category": "Main Course"
    },
    {
      "id": 6,
      "name": "tapioca with kakka fry",
      "price": "Rs.285",
      "priceColor": "#9A0002",
      "image": goatlegpayaidiyappam,
      "category": "Main Course"
    },
    {
      "id": 7,
      "name": "egg appam chickpea curry",
      "price": "Rs.195",
      "priceColor": "#9A0002",
      "image": goatlegpayaidiyappam,
      "category": "Main Course"
    },
    {
      "id": 8,
      "name": "biriyani with raita",
      "price": "Rs.180",
      "priceColor": "#9A0002",
      "image": duckcurru,
      "category": "Main Course"
    },
    {
      "id": 9,
      "name": "goat leg paya idiyappam",
      "price": "Rs.195",
      "priceColor": "#9A0002",
      "image": goatlegpayaidiyappam,
      "category": "Main Course"
    },
    {
      "id": 10,
      "name": "fish curry with rice",
      "price": "Rs.160",
      "priceColor": "#9A0002",
      "image": goatlegpayaidiyappam,
      "category": "Main Course"
    },
    {
      "id": 11,
      "name": "mutton curry with rice",
      "price": "Rs.175",
      "priceColor": "#9A0002",
      "image": duckcurru,
      "category": "Main Course"
    },
    {
      "id": 12,
      "name": "chicken biryani",
      "price": "Rs.165",
      "priceColor": "#9A0002",
      "image": muttoncurrwithrice,
      "category": "Main Course"
    },
    {
      "id": 13,
      "name": "beef curry with appam",
      "price": "Rs.185",
      "priceColor": "#9A0002",
      "image": muttoncurrwithrice,
      "category": "Main Course"
    },
    {
      "id": 14,
      "name": "prawn curry with rice",
      "price": "Rs.195",
      "priceColor": "#9A0002",
      "image": muttoncurrwithrice,
      "category": "Main Course"
    },
    {
      "id": 15,
      "name": "duck curry with idiyappam",
      "price": "Rs.205",
      "priceColor": "#9A0002",
      "image": duckcurru,
      "category": "Main Course"
    },
    {
      "id": 16,
      "name": "potato curry",
      "price": "Rs.45",
      "priceColor": "#3C070D",
      "image": chapathichickencurry,
      "category": "Side Dish"
    },
    {
      "id": 17,
      "name": "cabbage thoran",
      "price": "Rs.35",
      "priceColor": "#3C070D",
      "image": chapathichickencurry,
      "category": "Side Dish"
    },
    {
      "id": 18,
      "name": "beetroot thoran",
      "price": "Rs.40",
      "priceColor": "#3C070D",
      "image": chapathichickencurry,
      "category": "Side Dish"
    },
    {
      "id": 19,
      "name": "carrot thoran",
      "price": "Rs.35",
      "priceColor": "#3C070D",
      "image": duckcurru,
      "category": "Side Dish"
    },
    {
      "id": 20,
      "name": "beans thoran",
      "price": "Rs.40",
      "priceColor": "#3C070D",
      "image": chapathichickencurry,
      "category": "Side Dish"
    },
    {
      "id": 21,
      "name": "chicken 65",
      "price": "Rs.85",
      "priceColor": "#390007",
      "image": chapathichickencurry,
      "category": "Appetizers"
    },
    {
      "id": 22,
      "name": "fish fry",
      "price": "Rs.95",
      "priceColor": "#390007",
      "image": goatlegpayaidiyappam,
      "category": "Appetizers"
    },
    {
      "id": 23,
      "name": "mutton sukka",
      "price": "Rs.105",
      "priceColor": "#390007",
      "image": duckcurru,
      "category": "Appetizers"
    },
    {
      "id": 24,
      "name": "beef sukka",
      "price": "Rs.95",
      "priceColor": "#390007",
      "image": goatlegpayaidiyappam,
      "category": "Appetizers"
    },
    {
      "id": 25,
      "name": "prawn fry",
      "price": "Rs.115",
      "priceColor": "#390007",
      "image": chapathichickencurry,
      "category": "Appetizers"
    },
    {
      "id": 26,
      "name": "payasam",
      "price": "Rs.35",
      "priceColor": "#3C070D",
      "image": goatlegpayaidiyappam,
      "category": "Desserts"
    },
    {
      "id": 27,
      "name": "gulab jamun",
      "price": "Rs.25",
      "priceColor": "#3C070D",
      "image": duckcurru,
      "category": "Desserts"
    },
    {
      "id": 28,
      "name": "rasgulla",
      "price": "Rs.30",
      "priceColor": "#3C070D",
      "image": goatlegpayaidiyappam,
      "category": "Desserts"
    },
    {
      "id": 29,
      "name": "jalebi",
      "price": "Rs.20",
      "priceColor": "#3C070D",
      "image": chapathichickencurry,
      "category": "Desserts"
    },
    {
      "id": 30,
      "name": "kheer",
      "price": "Rs.40",
      "priceColor": "#3C070D",
      "image": goatlegpayaidiyappam,
      "category": "Desserts"
    },
    {
      "id": 31,
      "name": "ycc special chicken curry",
      "price": "Rs.185",
      "priceColor": "#009944",
      "image": duckcurru,
      "category": "YCC Signature Dish"
    },
    {
      "id": 32,
      "name": "ycc fish curry special",
      "price": "Rs.215",
      "priceColor": "#009944",
      "image": goatlegpayaidiyappam,
      "category": "YCC Signature Dish"
    },
    {
      "id": 33,
      "name": "heritage crab masala",
      "price": "Rs.395",
      "priceColor": "#009944",
      "image": chapathichickencurry,
      "category": "YCC Signature Dish"
    },
    {
      "id": 34,
      "name": "traditional mutton biryani",
      "price": "Rs.295",
      "priceColor": "#009944",
      "image": duckcurru,
      "category": "YCC Signature Dish"
    },
    {
      "id": 35,
      "name": "chef's special seafood platter",
      "price": "Rs.450",
      "priceColor": "#009944",
      "image": goatlegpayaidiyappam,
      "category": "YCC Signature Dish"
    }
  ];
  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
  <div>
    <div className="bg-[#9a0002] text-white services-page ">
      <Navbar />
      {/* Main Title */}
      <Container className='services-page'>
        <Row>
          <h1 className="services-main-title mt-5">OUR MENU</h1>
          <p className="services-subtitle">Discover authentic indian dish lost through time</p>
          {/* Category Filters */}
          <div className="category-filters p-3">
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
          <div className="container">
            <Row>
              {filteredItems.map((item) => (
                <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card
                    sx={{
                      minHeight: '400px',
                      width: '100%',
                      border: 'none',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        // boxShadow: '0 20px 20px rgba(0,0,0,0.3)',
                      }
                    }}
                  >
                    <CardCover>
                      <img
                        height={280}
                        src={item.image}
                        loading="lazy"
                        alt={item.name}
                        style={{ objectFit: 'cover' }}
                      />
                    </CardCover>
                    <CardCover
                      sx={{
                        background:
                          'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 70%)',
                      }}
                    />
                    <CardContent
                      sx={{
                        justifyContent: 'space-between',
                        height: '100%',
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <Typography
                          level="title-lg"
                          textColor="#fff"
                          sx={{
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            marginBottom: '8px',
                            lineHeight: 1.3,
                            textTransform: 'capitalize'
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          textColor="#fff"
                          sx={{
                            fontSize: '1.2rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: '16px'
                          }}
                        >
                          {item.price}
                        </Typography>
                      </div>
                      <Button
                        variant="solid"
                        color="primary"
                        startDecorator={<AddShoppingCartIcon />}
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          backgroundColor: '#fff',
                          color: '#9a0002',
                          fontWeight: 600,
                          borderRadius: '8px',
                          padding: '10px 16px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#f5f5f5',
                            transform: 'scale(1.02)',
                            boxShadow: '0 4px 12px rgba(255,255,255,0.3)'
                          }
                        }}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Row>
      </Container>
     
    </div>
   <Footer/>
  </div>
  );
};
export default Services;
