import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function FavouriteProductShow(props) {
  return (
    <Box>
      <Grid container spacing={3}>
        {props.allProducts
          ? props.allProducts.map((element) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={element._id}>
                <ProductCard
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
          <FavoriteBorderIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
          <Typography variant="h5" sx={{ color: '#666', mb: 1 }}>
            No Favorites Yet
          </Typography>
          <Typography variant="body2" sx={{ color: '#999' }}>
            Add items to your favorites to see them here
          </Typography>
        </Paper>
      )}
    </Box>
  );
}

export default FavouriteProductShow;
