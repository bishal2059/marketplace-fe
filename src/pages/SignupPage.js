import React, { useState, useRef } from 'react';
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
  Grid,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { motion } from 'framer-motion';
import NavBar from '../components/home/NavBar';
import Footer from '../components/home/Footer';
import signUpHandle from '../hooks/signUpHandle';

const MotionPaper = motion(Paper);

function SignupPage() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const genderRef = useRef(null);
  const dateOfBirthRef = useRef(null);
  const phoneNoRef = useRef(null);
  const userNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const cpasswordRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    const userData = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      gender: genderRef.current.value,
      dateOfBirth: dateOfBirthRef.current.value,
      phoneNo: phoneNoRef.current.value,
      userName: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cpassword: cpasswordRef.current.value,
    };

    const response = await signUpHandle(userData);

    if (response?.clientError) {
      setError(response.clientError);
      setLoading(false);
      return;
    }
    if (response?.error) {
      setError(Object.values(response.error)[0]);
      setLoading(false);
      return;
    }
    if (response?.success) {
      setSuccess(response.success);
      // Clear form fields
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      genderRef.current.value = 'Male';
      dateOfBirthRef.current.value = '';
      phoneNoRef.current.value = '';
      userNameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      cpasswordRef.current.value = '';
      setLoading(false);
      setTimeout(() => setSuccess(''), 3000);
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
        <Container maxWidth="md">
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
              <Box sx={{ fontSize: '3rem', mb: 2 }}>🎉</Box>
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
                Join Marketplace
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Create your account in just a few minutes
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

            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Alert severity="success" sx={{ mb: 3 }}>
                  {success}
                </Alert>
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    inputRef={firstNameRef}
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    inputRef={lastNameRef}
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    inputRef={userNameRef}
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    inputRef={emailRef}
                    type="email"
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    inputRef={phoneNoRef}
                    type="number"
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    inputRef={dateOfBirthRef}
                    type="date"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Gender</InputLabel>
                    <Select 
                      inputRef={genderRef}
                      label="Gender" 
                      defaultValue="Male"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    inputRef={passwordRef}
                    type="password"
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    inputRef={cpasswordRef}
                    type="password"
                    variant="outlined"
                    required
                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: '10px' } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox required />}
                    label="I agree to the Terms and Conditions"
                  />
                </Grid>
              </Grid>

              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={loading}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '10px',
                }}
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </Button>
            </form>
          </MotionPaper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default SignupPage;
