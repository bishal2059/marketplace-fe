import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Footer from '../components/home/Footer';
import NavUser from '../components/user/NavUser';
import UserProductBody from '../components/user/UserProductBody';
import { getAllHistory } from '../hooks/historyHandle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function HistoryPage() {
  const [products, setproducts] = useState(0);

  useEffect(() => {
    (async function () {
      const response = await getAllHistory();
      if (response?.error) {
        setproducts([]);
        return;
      }
      if (response?.clientError) {
        setproducts([]);
        return;
      }
      setproducts(response);
    })();
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavUser goback={true} />

      <Box
        sx={{
          flexGrow: 1,
          py: 4,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%)',
        }}
      >
        <Container maxWidth="xl">
          {/* Page Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 3,
                py: 1,
                borderRadius: 3,
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                mb: 2,
              }}
            >
              <ReceiptLongIcon sx={{ color: '#667eea' }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Purchase History
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              View all your past purchases and orders
            </Typography>
          </Box>

          <UserProductBody allProducts={products} showhistory={true} />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default HistoryPage;
