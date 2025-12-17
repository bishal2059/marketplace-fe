import { Favorite, FavoriteBorder, ShoppingCart } from '@mui/icons-material';
import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {
  Backdrop,
  Alert,
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Tooltip,
} from '@mui/material';
import { addToCart } from '../../hooks/cartHandle';
import {
  addToFavourite,
  removeFromFavourite,
} from '../../hooks/favouriteHandle';
import ImgSlider from './ImgSlider';

function ProductCard(props) {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const handleToggle = () => setOpen(!open);
  const handleToggle1 = () => setOpen1(!open1);
  const handleToggle2 = () => setOpen2(!open2);

  const [favourite, setfavourite] = useState(props.favourite);
  const [cart, setcart] = useState(props.cart);

  const discountedPrice = (((100 - props.discountPercentage) / 100) * props.price).toFixed(2);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Product Image */}
      <Box sx={{ position: 'relative' }}>
        <ImgSlider thumbnail={props.thumbnail} images={props.images} />
        
        {/* Discount Badge */}
        {props.discountPercentage > 0 && (
          <Chip
            label={`-${Math.round(props.discountPercentage)}%`}
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              backgroundColor: '#ff6b35',
              color: 'white',
              fontWeight: 700,
              fontSize: '0.75rem',
            }}
          />
        )}

        {/* Stock Warning */}
        {props.stock < 10 && (
          <Chip
            label={`Only ${props.stock} left!`}
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              backgroundColor: '#f44336',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.7rem',
            }}
          />
        )}
      </Box>

      {/* Product Details */}
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5 }}>
        <Typography
          variant="subtitle2"
          sx={{
            color: '#667eea',
            fontWeight: 600,
            textTransform: 'uppercase',
            fontSize: '0.7rem',
            letterSpacing: '0.5px',
            mb: 0.5,
          }}
        >
          {props.brand}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '1rem',
            lineHeight: 1.3,
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {props.name}
        </Typography>

        <Box sx={{ mb: 1 }}>
          <StarRatings
            rating={props.rating}
            starRatedColor="#ffc107"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
            starEmptyColor="#e0e0e0"
          />
          <Typography variant="caption" sx={{ ml: 1, color: '#666' }}>
            ({props.rating.toFixed(1)})
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            color: '#666',
            fontSize: '0.8rem',
            lineHeight: 1.5,
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
          }}
        >
          {props.description}
        </Typography>

        {/* Price and Actions */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 'auto',
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: '#667eea',
                fontSize: '1.25rem',
              }}
            >
              ${discountedPrice}
            </Typography>
            {props.discountPercentage > 0 && (
              <Typography
                variant="body2"
                sx={{
                  color: '#999',
                  textDecoration: 'line-through',
                  fontSize: '0.85rem',
                }}
              >
                ${props.price}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Tooltip title={favourite ? 'In Favorites' : 'Add to Favorites'}>
              <IconButton
                onClick={async () => {
                  if (favourite) {
                    if (new URL(window.location.href).pathname !== '/favourite') {
                      handleToggle2();
                      return;
                    }
                    const response = await removeFromFavourite(props.id);
                    if (response?.success === 'Removed from Favourite') {
                      setfavourite(false);
                      props.state((value) => !value);
                    }
                  } else {
                    const response = await addToFavourite(props.id);
                    if (response?.success === 'Added to Favourite') {
                      setfavourite(true);
                      props.state((value) => !value);
                    }
                  }
                }}
                sx={{
                  backgroundColor: favourite ? 'rgba(244, 67, 54, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    backgroundColor: favourite ? 'rgba(244, 67, 54, 0.2)' : 'rgba(244, 67, 54, 0.1)',
                  },
                }}
              >
                {favourite ? (
                  <Favorite sx={{ color: '#f44336' }} />
                ) : (
                  <FavoriteBorder sx={{ color: '#f44336' }} />
                )}
              </IconButton>
            </Tooltip>

            <Tooltip title={cart ? 'In Cart' : 'Add to Cart'}>
              <IconButton
                onClick={async () => {
                  if (cart) {
                    handleToggle1();
                  } else {
                    const response = await addToCart(props.id);
                    if (response?.unverified === true) {
                      seterror(response?.message);
                      handleToggle();
                    }
                    if (response?.success === 'Added to Cart') {
                      setcart(true);
                      props.state((value) => !value);
                    }
                  }
                }}
                sx={{
                  backgroundColor: cart ? 'rgba(76, 175, 80, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                  '&:hover': {
                    backgroundColor: cart ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)',
                  },
                }}
              >
                <ShoppingCart sx={{ color: cart ? '#4caf50' : '#666' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </CardContent>

      {/* Backdrops */}
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={open} onClick={handleClose}>
        <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>
      </Backdrop>
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={open1} onClick={handleClose1}>
        <Alert severity="warning" sx={{ borderRadius: 2 }}>
          Please go to cart to remove items from cart
        </Alert>
      </Backdrop>
      <Backdrop sx={{ color: '#fff', zIndex: 9999 }} open={open2} onClick={handleClose2}>
        <Alert severity="warning" sx={{ borderRadius: 2 }}>
          Please go to favourite to remove items from favourite.
        </Alert>
      </Backdrop>
    </Card>
  );
}

export default ProductCard;
