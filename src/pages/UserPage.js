import { Box, Container, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Footer from '../components/home/Footer';
import NavUser from '../components/user/NavUser';
import UserDetails from '../components/user/UserDetails';
import { getUserDetails } from '../hooks/userHttp';
import PersonIcon from '@mui/icons-material/Person';

function UserPage() {
  const [user, setuser] = useState({});

  useEffect(() => {
    (async function () {
      const result = await getUserDetails();
      if (result?.error) {
        console.error(result.error);
      }
      if (result?.clientError) {
        console.error(result.clientError);
      }
      setuser(result);
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
        <Container maxWidth="md">
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
              <PersonIcon sx={{ color: '#667eea' }} />
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                My Profile
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Manage your account settings and preferences
            </Typography>
          </Box>

          <UserDetails
            firstName={user?.firstName}
            lastName={user?.lastName}
            age={user?.age}
            dateOfBirth={user?.dateOfBirth}
            gender={user?.gender}
            email={user?.email}
            userName={user?.userName}
            phoneNo={user?.phoneNo}
            verified={user?.verified}
          />
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default UserPage;
