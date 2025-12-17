import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const MotionBox = motion(Box);

function HomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Shipping',
      description: 'Get your orders delivered quickly and safely',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure Payment',
      description: 'Your payment information is always safe with us',
    },
    {
      icon: <ThumbUpIcon sx={{ fontSize: 40 }} />,
      title: 'Best Quality',
      description: 'Hand-picked products from trusted sellers',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Amazing Deals',
      description: 'Up to 50% discount on premium products',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar home={true} />

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3.5rem' },
                  }}
                >
                  Welcome to <span style={{ color: '#ffdd00' }}>Marketplace</span>
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    opacity: 0.9,
                    fontSize: { xs: '1rem', md: '1.3rem' },
                  }}
                >
                  Discover thousands of premium products at unbeatable prices. Shop smart, save big!
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    backgroundColor: '#ffdd00',
                    color: '#667eea',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    padding: '12px 32px',
                    borderRadius: '30px',
                    '&:hover': {
                      backgroundColor: '#ffd700',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  Start Shopping Now
                </Button>
              </MotionBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  sx={{
                    fontSize: '200px',
                    textAlign: 'center',
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-20px)' },
                    },
                  }}
                >
                  🛒
                </Box>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, backgroundColor: '#f5f7fa' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              mb: 6,
              color: '#1a1a1a',
            }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      py: 3,
                      backgroundColor: 'white',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ color: '#667eea', mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
            Ready to Start Shopping?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of happy customers and experience the best online shopping.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/signup')}
            sx={{
              backgroundColor: 'white',
              color: '#ff6b35',
              fontWeight: 700,
              fontSize: '1.1rem',
              padding: '12px 32px',
              borderRadius: '30px',
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            Sign Up Today
          </Button>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default HomePage;
