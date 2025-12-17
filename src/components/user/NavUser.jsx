import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';
import { logoutHandle } from '../../hooks/logoutHandle';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

function NavUser(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    const response = await logoutHandle();
    if (response?.success) {
      navigate('/');
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/products', icon: <HomeIcon /> },
    { label: 'Favorites', path: '/favourite', icon: <FavoriteIcon /> },
    { label: 'Cart', path: '/cart', icon: <ShoppingCartIcon /> },
    { label: 'History', path: '/history', icon: <HistoryIcon /> },
  ];

  const drawer = (
    <Box sx={{ p: 2, width: 280, height: '100%', backgroundColor: '#f8f9fa' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(102, 126, 234, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#667eea' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                background: 'linear-gradient(135deg, #fff 0%, #e0e0e0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
              onClick={() => navigate('/products')}
            >
              🛍️ Marketplace
            </Box>
          </MotionBox>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mr: 2 }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {item.icon}
                  {item.label}
                </Box>
              ))}
            </Box>
          )}

          {/* Go Back Button */}
          {props.goback && (
            <Box
              component={Link}
              to="/products"
              sx={{
                color: 'white',
                textDecoration: 'none',
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: 0.5,
                px: 2,
                py: 1,
                mr: 2,
                borderRadius: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                },
              }}
            >
              <ArrowBackIcon fontSize="small" /> Back
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Profile Menu */}
          <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                backgroundColor: '#ff6b35',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <PersonIcon />
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                mt: 1.5,
                borderRadius: 2,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <MenuItem
              component={Link}
              to="/users"
              onClick={handleMenuClose}
              sx={{ gap: 1 }}
            >
              <PersonIcon fontSize="small" /> Profile
            </MenuItem>
            <MenuItem onClick={handleLogout} sx={{ gap: 1, color: '#f44336' }}>
              <LogoutIcon fontSize="small" /> Logout
            </MenuItem>
          </Menu>

          {/* Mobile Drawer */}
          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavUser;
