import { Box, Container, Typography, Alert, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/home/Footer';
import NavUser from '../components/user/NavUser';
import UserProductBody from '../components/user/UserProductBody';
import { getAllCart } from '../hooks/cartHandle';
import { getUserDetails } from '../hooks/userHttp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function CartPage() {
  const [state, setstate] = useState(true);
  const navigate = useNavigate();
  const [products, setproducts] = useState(0);
  const [isVerified, setIsVerified] = useState(true);
  const [showUnverifiedAlert, setShowUnverifiedAlert] = useState(false);

  useEffect(() => {
    (async function () {
      // Check user verification status
      const userDetails = await getUserDetails();
      if (userDetails && !userDetails.error) {
        setIsVerified(userDetails.verified);
      }

      const response = await getAllCart();
      if (response?.unverified === true) {
        setShowUnverifiedAlert(true);
        setIsVerified(false);
        // Don't navigate away, show info instead
        setproducts([]);
        return;
      }
      if (response?.error) {
        setproducts([]);
        return;
      }
      if (response?.clientError) {
        setproducts([]);
        return;
      }

      setproducts(response);
    })();
  }, [navigate, state]);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavUser goback={true} />

      <Box
        sx={{
          flexGrow: 1,
          py: 4,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
        }}
      >
        <Container maxWidth="xl">
          {/* Page Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                borderRadius: 3,
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                mb: 2,
              }}
            >
              <ShoppingCartIcon sx={{ color: '#667eea' }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                My Cart
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Review and purchase your saved items
            </Typography>
          </Box>

          {/* Verification Status Banner */}
          {!isVerified && (
            <Alert
              severity="warning"
              icon={<WarningAmberIcon />}
              sx={{
                mb: 3,
                borderRadius: 2,
                '& .MuiAlert-message': { width: '100%' },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                    Email Verification Required
                  </Typography>
                  <Typography variant="body2">
                    Please verify your email address to access cart features and make purchases.
                  </Typography>
                </Box>
                <Box
                  component="a"
                  href="/user"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 0.5,
                    borderRadius: 2,
                    backgroundColor: '#ed6c02',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    '&:hover': { backgroundColor: '#e65100' },
                  }}
                >
                  <VerifiedUserIcon sx={{ fontSize: 18 }} />
                  Verify Now
                </Box>
              </Box>
            </Alert>
          )}

          {isVerified && (
            <Paper
              elevation={0}
              sx={{
                p: 2,
                mb: 3,
                borderRadius: 2,
                background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
                border: '1px solid rgba(102,126,234,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >
              <VerifiedUserIcon sx={{ color: '#4caf50' }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#4caf50' }}>
                  Account Verified
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  You can add items to cart and make secure purchases.
                </Typography>
              </Box>
            </Paper>
          )}

          <UserProductBody
            allProducts={products}
            showCart={true}
            state={setstate}
          />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default CartPage;
