import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  IconButton,
  Chip
} from '@mui/material';
import {
  AccessTime,
  Facebook,
  Instagram,
  YouTube,
  WhatsApp,
  Phone,
  Email,
  LocationOn,
  Send
} from '@mui/icons-material';
import { Container, Row, Col } from 'react-bootstrap'; // ✅ React-Bootstrap
import './ContactUs.css';
import Navbar from '../Navbar';
import Footer from '../footers/Footer';
const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    orderType: '',
    orderDate: '',
    orderTime: '',
    numberOfGuests: '',
    message: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      orderType: '',
      orderDate: '',
      orderTime: '',
      numberOfGuests: '',
      message: ''
    });
  };
  const businessHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 9:00 PM' }
  ];
  // const orderTypes = [
  //   'Dine-in',
  //   'Takeaway',
  //   'Delivery',
  //   'Catering',
  //   'Special Event',
  //   'Corporate Order'
  // ];
  const socialLinks = [
    { icon: <Facebook />, name: 'Facebook', color: '#1877F2', url: 'https://www.facebook.com/' },
    { icon: <Instagram />, name: 'Instagram', color: '#E4405F', url: 'https://www.instagram.com/' },
    { icon: <YouTube />, name: 'YouTube', color: '#FF0000', url: 'https://www.youtube.com/' },
    { icon: <WhatsApp />, name: 'LinkedIn', color: '#0A66C2', url: 'https://wa.me/917824099400' }
  ];
  return (
    <div>
      <div className="contact-page">
        <Navbar />
        <Container  >
          {/* <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            color: '#9a0002',
            fontWeight: 700,
            mb: 1,
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Contact Us
        </Typography> */}
          {/* <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={{ mb: 5, fontWeight: 400 }}
        >
          Get in touch with us for reservations, orders, or any inquiries
        </Typography> */}
          <Row className="g-4 mt-5 pb-5">
            {/* Left Column - Business Hours & Social Media */}
            <Col xs={12} md={5} className='pb-3'>
              <Card
                elevation={8}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #9a0002 0%, #3d0a0a 100%)',
                  color: 'white',
                  borderRadius: 3,
                  overflow: 'hidden'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Business Hours Section */}
                  <Box sx={{ mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <AccessTime sx={{ fontSize: 32, mr: 2, color: '#FFD700' }} />
                      <Typography variant="h4" component="h2" fontWeight={600}>
                        Business Hours
                      </Typography>
                    </Box>
                    <Box sx={{ mb: 3 }}>
                      {businessHours.map((schedule, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            py: 1.5,
                            px: 2,
                            mb: 1,
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: 2,
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <Typography variant="body1" fontWeight={500}>
                            {schedule.day}
                          </Typography>
                          <Chip
                            label={schedule.time}
                            size="small"
                            sx={{
                              background: 'rgba(255,215,0,0.2)',
                              color: '#FFD700',
                              fontWeight: 600,
                              border: '1px solid rgba(255,215,0,0.3)'
                            }}
                          />
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 3 }} />
                  {/* Contact Info */}
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 3 }}>
                      Contact Information
                    </Typography>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Phone sx={{ mr: 2, color: '#FFD700' }} />
                      <Typography variant="body1">+91 78240 99400</Typography>
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <Email sx={{ mr: 2, color: '#FFD700' }} />
                      <Typography variant="body1">yatrascookingcave@gmail.com</Typography>
                    </Box>
                  </Box>
                  <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', my: 3 }} />
                  {/* Social Media */}
                  <Box>
                    <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 3 }}>
                      Follow Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: '4px' }}>
                      {socialLinks.map((social, index) => (
                        <IconButton
                          key={index}
                          href={social.url}
                          target="_blank"
                          sx={{
                            background: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '2px solid rgba(255,255,255,0.2)',
                            transition: 'all 0.3s ease',
                            margin: '6px',
                            '&:hover': {
                              background: social.color,
                              transform: 'translateY(-3px)',
                            }
                          }}
                          size="large"
                        >
                          {social.icon}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Col>
            {/* Right Column - Contact Form */}
            <Col xs={12} md={7} className='pb-3'>
              <Card
                elevation={8}
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                  borderRadius: 3,
                  border: '1px solid rgba(154, 0, 2, 0.1)'
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" component="h2" sx={{ mb: 4, color: '#9a0002', fontWeight: 600 }}>
                    Send us a Message
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                        />
                      </Col>
                      {/* <Col xs={12} sm={6}>
                      <FormControl fullWidth required>
                        <InputLabel>Order Type</InputLabel>
                        <Select
                          placeholder="Order Type"
                          name="orderType"
                          value={formData.orderType}
                          onChange={handleInputChange}
                          label="Order Type"
                          variant='standard'
                        >
                          {orderTypes.map((type) => (
                            <MenuItem key={type} value={type}>
                              {type}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col> */}
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Order Type"
                          name="orderType"
                          value={formData.orderType}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Order Date"
                          name="orderDate"
                          type="date"
                          value={formData.orderDate}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Order Time"
                          name="orderTime"
                          type="time"
                          value={formData.orderTime}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                        />
                      </Col>
                      <Col xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Number of Guests/Boxes"
                          name="numberOfGuests"
                          type="number"
                          onWheel={(e) => e.target.blur()}
                          value={formData.numberOfGuests}
                          onChange={handleInputChange}
                          required
                          variant="standard"
                          inputProps={{ min: 1 }}
                        />
                      </Col>
                      <Col xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          multiline
                          rows={4}
                          variant="standard"
                          placeholder="Tell us about your order, special requirements, or any questions..."
                        />
                      </Col>
                      <Col xs={12}>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          size="large"
                          endIcon={<Send />}
                          sx={{
                            background: 'linear-gradient(135deg, #9a0002 0%, #3d0a0a 100%)',
                            color: 'white',
                            py: 2,
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: 2,
                            textTransform: 'none'
                          }}
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Box>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
