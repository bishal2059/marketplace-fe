import React, { useRef, useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Link as MuiLink,
  Grid,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import loginHandler from '../hooks/loginHandler';

const MotionPaper = motion(Paper);

function LoginPage() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await loginHandler(userData);

    if (response.clientError) {
      setError(response.clientError);
      setLoading(false);
      return;
    }
    if (response.error) {
      setError(Object.values(response.error)[0]);
      setLoading(false);
      return;
    }
    if (response.user) {
      setLoading(false);
      navigate('/products');
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar home={false} />

      <Box
        sx={{
          flex: 1,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          display: 'flex',
          alignItems: 'center',
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <MotionPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: 4,
                  backgroundColor: 'white',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Box sx={{ fontSize: '3rem', mb: 2 }}>🔐</Box>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1,
                    }}
                  >
                    Welcome Back
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Log in to access your account
                  </Typography>
                </Box>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Alert severity="error" sx={{ mb: 3 }}>
                      {error}
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    inputRef={emailRef}
                    type="email"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Password"
                    inputRef={passwordRef}
                    type="password"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                      },
                    }}
                    required
                  />

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      fontSize: '1rem',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '10px',
                    }}
                  >
                    {loading ? 'Logging in...' : 'Log In'}
                  </Button>

                  <Box sx={{ textAlign: 'center', mt: 2 }}>
                    <Typography variant="body2">
                      Don't have an account?{' '}
                      <MuiLink
                        component={Link}
                        to="/signup"
                        sx={{
                          color: '#667eea',
                          fontWeight: 600,
                          textDecoration: 'none',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        Sign up here
                      </MuiLink>
                    </Typography>
                  </Box>
                </form>
              </MotionPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default LoginPage;
