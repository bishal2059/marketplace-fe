import React, { useState } from 'react';
import { Paper, IconButton, Tooltip, Backdrop, Alert } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';
import { getAllCart } from '../../hooks/cartHandle';

function UserOption() {
  const [error, seterror] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);
  const navigate = useNavigate();

  const options = [
    {
      icon: <FavoriteIcon />,
      label: 'Favorites',
      color: '#f44336',
      bgColor: 'rgba(244, 67, 54, 0.1)',
      onClick: () => navigate('/favourite'),
    },
    {
      icon: <ShoppingCartIcon />,
      label: 'Cart',
      color: '#4caf50',
      bgColor: 'rgba(76, 175, 80, 0.1)',
      onClick: async () => {
        const response = await getAllCart();
        if (response?.unverified === true) {
          seterror(response?.message);
          handleToggle();
        } else {
          navigate('/cart');
        }
      },
    },
    {
      icon: <HistoryIcon />,
      label: 'History',
      color: '#667eea',
      bgColor: 'rgba(102, 126, 234, 0.1)',
      onClick: () => navigate('/history'),
    },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        p: 2,
        position: 'sticky',
        top: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {options.map((option) => (
        <Tooltip key={option.label} title={option.label} placement="left" arrow>
          <IconButton
            onClick={option.onClick}
            sx={{
              width: 56,
              height: 56,
              backgroundColor: option.bgColor,
              color: option.color,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: option.color,
                color: 'white',
                transform: 'scale(1.1)',
                boxShadow: `0 8px 24px ${option.color}40`,
              },
            }}
          >
            {option.icon}
          </IconButton>
        </Tooltip>
      ))}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Alert severity="error" sx={{ borderRadius: 2 }}>
          {error}
        </Alert>
      </Backdrop>
    </Paper>
  );
}

export default UserOption;
