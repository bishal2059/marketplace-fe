import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Chip,
  Backdrop,
  Alert,
  Tooltip,
} from '@mui/material';
import { Delete, CreditCard } from '@mui/icons-material';
import StarRatings from 'react-star-ratings';
import { removeFromCart } from '../../hooks/cartHandle';
import ImgSlider from './ImgSlider';
import StripeCheckout from 'react-stripe-checkout';
import paymentHandler from '../../hooks/paymentHandle';

function CartProductCard(props) {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);

  const [open2, setOpen2] = useState(false);
  const handleClose2 = async () => {
    setOpen2(false);
    await removeItemFromCart();
  };
  const handleToggle2 = () => setOpen2(!open2);

  const [open3, setOpen3] = useState(false);
  const handleClose3 = () => setOpen3(false);
  const handleToggle3 = () => setOpen3(!open3);

  const [cart, setcart] = useState(props.cart);

  const finalPrice = (((100 - props.discountPercentage) / 100) * props.price).toFixed(2);

  const makePayment = async function (token) {
    const response = await paymentHandler(token, props.id);
    if (response?.clientError) {
      return console.error(response.clientError);
    }
    if (response?.error) {
      handleToggle3();
      return console.error(response.error);
    }
    if (response?.success === 'Payment Successful') {
      console.log('Success');
      handleToggle2();
    }
  };

  const removeItemFromCart = async function () {
    const response = await removeFromCart(props.id);
    if (response?.unverified === true) {
      seterror(response?.message);
      handleToggle();
    }
    if (response?.clientError) {
      console.error(response.clientError);
      return;
    }
    if (response?.error) {
      console.error(response.error);
      return;
    }
    if (response?.success === 'Removed from Cart') {
      setcart(false);
      props.state((value) => !value);
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        position: 'relative',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
        },
      }}
    >
      {/* Discount Badge */}
      {props.discountPercentage > 0 && (
        <Chip
          label={`-${props.discountPercentage}%`}
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            left: 12,
            zIndex: 10,
            fontWeight: 700,
          }}
        />
      )}

      {/* Stock Warning */}
      {props.stock <= 5 && (
        <Chip
          label={`Only ${props.stock} left!`}
          color="warning"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            fontWeight: 600,
          }}
        />
      )}

      {/* Image Slider */}
      <Box sx={{ height: 200, overflow: 'hidden' }}>
        <ImgSlider thumbnail={props.thumbnail} images={props.images} />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
        {/* Product Name & Brand */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: '1rem',
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {props.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mb: 1.5, fontWeight: 500 }}
        >
          {props.brand}
        </Typography>

        {/* Rating */}
        <Box sx={{ mb: 1.5 }}>
          <StarRatings
            rating={props.rating}
            starRatedColor="#ffc107"
            numberOfStars={5}
            name="rating"
            starDimension="16px"
            starSpacing="2px"
            starEmptyColor="#e0e0e0"
          />
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: 1.5,
          }}
        >
          {props.description}
        </Typography>

        {/* Price Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ${finalPrice}
          </Typography>
          {props.discountPercentage > 0 && (
            <Typography
              variant="body2"
              sx={{
                textDecoration: 'line-through',
                color: 'text.disabled',
              }}
            >
              ${props.price}
            </Typography>
          )}
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {cart && (
            <Tooltip title="Remove from Cart">
              <IconButton
                onClick={removeItemFromCart}
                sx={{
                  backgroundColor: '#ffebee',
                  color: '#f44336',
                  '&:hover': {
                    backgroundColor: '#ffcdd2',
                  },
                }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          )}

          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPEKEY}
            token={makePayment}
            name={props.name}
            amount={finalPrice * 100}
            currency="USD"
            shippingAddress
            billingAddress
          >
            <Button
              variant="contained"
              startIcon={<CreditCard />}
              fullWidth
              sx={{
                py: 1.2,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: 2,
                fontWeight: 600,
                textTransform: 'none',
                fontSize: '0.95rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                  transform: 'scale(1.02)',
                },
              }}
            >
              Buy Now
            </Button>
          </StripeCheckout>
        </Box>
      </CardContent>

      {/* Backdrops for notifications */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      </Backdrop>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open2}
        onClick={handleClose2}
      >
        <Alert severity="success" sx={{ borderRadius: 2 }}>
          🎉 Congrats! You bought {props.name}
        </Alert>
      </Backdrop>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open3}
        onClick={handleClose3}
      >
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          An error occurred during payment.
        </Alert>
      </Backdrop>
    </Card>
  );
}

export default CartProductCard;
