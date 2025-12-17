import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import FavouriteProductShow from './FavouriteProductShow';
import HistoryProductShow from './HistoryProductShow';
import CartProductShow from './CartProductShow';
import UserOption from './UserOption';

function UserProductBody(props) {
  const getTitle = () => {
    if (props.showfavourite) return { text: 'Favorite Products', icon: <FavoriteIcon /> };
    if (props.showCart) return { text: 'Shopping Cart', icon: <ShoppingCartIcon /> };
    if (props.showhistory) return { text: 'Purchase History', icon: <HistoryIcon /> };
    return { text: 'Products', icon: null };
  };

  const { text, icon } = getTitle();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {icon && (
              <Box
                sx={{
                  p: 1.5,
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                }}
              >
                {icon}
              </Box>
            )}
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {text}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <UserOption />
          </Box>
        </Paper>

        {/* Content */}
        {props.showfavourite && (
          <FavouriteProductShow
            allProducts={props.allProducts}
            state={props.state}
          />
        )}
        {props.showCart && (
          <CartProductShow allProducts={props.allProducts} state={props.state} />
        )}
        {props.showhistory && (
          <HistoryProductShow allProducts={props.allProducts} />
        )}
      </Container>
    </Box>
  );
}

export default UserProductBody;
