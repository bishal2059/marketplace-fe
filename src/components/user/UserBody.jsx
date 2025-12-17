import React from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Categories from './Categories';
import ProductShow from './ProductShow';
import Searchbar from './Searchbar';
import UserOption from './UserOption';

function UserBody(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          {/* Categories Sidebar - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ flexShrink: 0, width: 240 }}>
              <Categories active={props.active} />
            </Box>
          )}

          {/* Main Content */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Searchbar />
            <ProductShow
              allProducts={props?.allProducts}
              previous={props?.previous}
              next={props?.next}
              state={props.state}
            />
          </Box>

          {/* User Options Sidebar - Hidden on mobile */}
          {!isMobile && (
            <Box sx={{ flexShrink: 0, width: 100 }}>
              <UserOption />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default UserBody;
