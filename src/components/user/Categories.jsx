import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';

function Categories(props) {
  const navigate = useNavigate();
  
  const categories = [
    'furniture', 'skincare', 'groceries', 'sunglasses', 'laptops', 'smartphones',
    'fragrances', 'home-decoration', 'automotive', 'motorcycle', 'lighting',
    'mens-shirts', 'mens-shoes', 'mens-watches', 'tops', 'womens-dresses',
    'womens-shoes', 'womens-watches', 'womens-bags', 'womens-jewellery',
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        position: 'sticky',
        top: 80,
      }}
    >
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 2,
          px: 2,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
        onClick={() => navigate('/products')}
      >
        <CategoryIcon />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Categories
        </Typography>
      </Box>

      <List
        sx={{
          maxHeight: '60vh',
          overflowY: 'auto',
          py: 1,
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '3px',
          },
        }}
      >
        {categories.map((category) => (
          <ListItem key={category} disablePadding>
            <ListItemButton
              onClick={() => navigate(`/category/${category}`)}
              sx={{
                py: 1.5,
                px: 2,
                borderLeft: props.active === category ? '4px solid #667eea' : '4px solid transparent',
                backgroundColor: props.active === category ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
                transition: 'all 0.2s ease',
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.08)',
                  borderLeft: '4px solid #667eea',
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: props.active === category ? 600 : 400,
                  color: props.active === category ? '#667eea' : '#333',
                  textTransform: 'capitalize',
                }}
              >
                {category.replace('-', ' ')}
              </Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Categories;
