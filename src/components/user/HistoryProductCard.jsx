import React from 'react';
import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import StarRatings from 'react-star-ratings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ImgSlider from './ImgSlider';

function HistoryProductCard(props) {
  const finalPrice = (((100 - props.discountPercentage) / 100) * props.price).toFixed(2);

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
      {/* Delivered Badge */}
      <Chip
        icon={<CheckCircleIcon />}
        label="Delivered"
        color="success"
        size="small"
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 10,
          fontWeight: 600,
        }}
      />

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

        {/* Price */}
        <Box sx={{ mt: 'auto' }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Sold Price
          </Typography>
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
        </Box>
      </CardContent>
    </Card>
  );
}

export default HistoryProductCard;
