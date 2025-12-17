import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Footer from '../components/home/Footer';
import NavUser from '../components/user/NavUser';
import UserProductBody from '../components/user/UserProductBody';
import { getAllFavourite } from '../hooks/favouriteHandle';
import FavoriteIcon from '@mui/icons-material/Favorite';

function FavouritePage() {
  const [state, setstate] = useState(true);
  const [products, setproducts] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await getAllFavourite();
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
  }, [state]);

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
              <FavoriteIcon sx={{ color: '#e91e63' }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                My Favourites
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Your collection of loved products
            </Typography>
          </Box>

          <UserProductBody
            allProducts={products}
            showfavourite={true}
            state={setstate}
          />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default FavouritePage;
