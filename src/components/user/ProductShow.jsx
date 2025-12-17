import React from 'react';
import { Box, Button, Typography, Grid, Paper } from '@mui/material';
import ProductCard from './ProductCard';
import { useContext } from 'react';
import PageContext from '../../contexts/Pages';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchOffIcon from '@mui/icons-material/SearchOff';

function ProductShow(props) {
  const { page, setpage } = useContext(PageContext);

  return (
    <Box>
      {/* Products Grid */}
      <Grid container spacing={3}>
        {props.allProducts
          ? props.allProducts.map((element) => (
              <Grid item xs={12} sm={6} lg={4} key={element._id}>
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

      {/* Empty State */}
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
          <SearchOffIcon sx={{ fontSize: 80, color: '#ccc', mb: 2 }} />
          <Typography variant="h5" sx={{ color: '#666', mb: 1 }}>
            No Products Found
          </Typography>
          <Typography variant="body2" sx={{ color: '#999' }}>
            Try adjusting your search or browse other categories
          </Typography>
        </Paper>
      )}

      {/* Pagination */}
      {(props.previous || props.next) && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 4,
            pb: 2,
          }}
        >
          {props.previous && (
            <Button
              variant="outlined"
              startIcon={<NavigateBeforeIcon />}
              onClick={() => setpage(page - 1)}
              sx={{
                borderColor: '#667eea',
                color: '#667eea',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  borderColor: '#764ba2',
                  backgroundColor: 'rgba(102, 126, 234, 0.08)',
                },
              }}
            >
              Previous
            </Button>
          )}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 3,
              py: 1,
              borderRadius: 2,
              backgroundColor: 'rgba(102, 126, 234, 0.1)',
              color: '#667eea',
              fontWeight: 600,
            }}
          >
            Page {page}
          </Box>
          {props.next && (
            <Button
              variant="contained"
              endIcon={<NavigateNextIcon />}
              onClick={() => setpage(page + 1)}
              sx={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                },
              }}
            >
              Next
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
}

export default ProductShow;
