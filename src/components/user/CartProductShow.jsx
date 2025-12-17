import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CartProductCard from './CartProductCard';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CartProductShow(props) {
  return (
    <Box>
      <Grid container spacing={3}>
        {props.allProducts
          ? props.allProducts?.map((element) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={element._id}>
                <CartProductCard
                  id={element._id}
                  name={element.name}
                  brand={element.brand}
                  description={element.description}
                  discountPercentage={element.discountPercentage}
                  images={element.images}
                  price={element.price}
                  rating={element.rating}
                  stock={element.stock}
                  thumbnail={element.thumbnail}
                  category={element.category}
                  favourite={element.favourite}
                  cart={element.cart}
                  state={props.state}
                />
              </Grid>
            ))
          : null}
      </Grid>

      {props.allProducts?.length === 0 && (
        <Paper
          sx={{
            py: 8,
            px: 4,
            textAlign: 'center',
            borderRadius: 3,
            backgroundColor: 'white',
          }}
        >
          <RemoveShoppingCartIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
          <Typography variant="h5" sx={{ color: '#666', mb: 1 }}>
            Your Cart is Empty
          </Typography>
          <Typography variant="body2" sx={{ color: '#999' }}>
            Add items to your cart to see them here
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default CartProductShow;
