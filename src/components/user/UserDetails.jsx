import React, { useState } from 'react';
import { verifyUser } from '../../hooks/userHttp';
import {
  Box,
  Paper,
  Avatar,
  Typography,
  Button,
  Chip,
  Divider,
  Backdrop,
  Alert,
  Grid,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  Cake,
  Wc,
  VerifiedUser,
  Lock,
  Send,
} from '@mui/icons-material';

function UserDetails(props) {
  const [emailSent, setemailSent] = useState(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleToggle = () => setOpen(!open);

  const DetailItem = ({ icon, label, value }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5 }}>
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.1) 0%, rgba(118,75,162,0.1) 100%)',
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
          {label}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {value || 'Not provided'}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        background: 'white',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      {/* Profile Header */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Avatar
          sx={{
            width: 120,
            height: 120,
            mx: 'auto',
            mb: 2,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontSize: '3rem',
            fontWeight: 700,
          }}
        >
          {props.firstName?.[0]?.toUpperCase() || 'U'}
        </Avatar>

        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          {props.firstName} {props.lastName}
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          @{props.userName}
        </Typography>

        <Chip
          icon={<VerifiedUser />}
          label={props.verified ? 'Verified Account' : 'Not Verified'}
          color={props.verified ? 'success' : 'warning'}
          sx={{ fontWeight: 600 }}
        />
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* User Details Grid */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Person sx={{ color: '#667eea' }} />}
            label="Full Name"
            value={`${props.firstName} ${props.lastName}`}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Wc sx={{ color: '#667eea' }} />}
            label="Gender"
            value={props.gender}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Cake sx={{ color: '#667eea' }} />}
            label="Date of Birth"
            value={props.dateOfBirth?.slice(0, 10)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Email sx={{ color: '#667eea' }} />}
            label="Email Address"
            value={props.email}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Phone sx={{ color: '#667eea' }} />}
            label="Phone Number"
            value={props.phoneNo}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <DetailItem
            icon={<Person sx={{ color: '#667eea' }} />}
            label="Username"
            value={props.userName}
          />
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          startIcon={<Lock />}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            fontWeight: 600,
            borderColor: '#667eea',
            color: '#667eea',
            '&:hover': {
              borderColor: '#764ba2',
              backgroundColor: 'rgba(102,126,234,0.05)',
            },
          }}
        >
          Change Password
        </Button>

        {!props.verified && (
          <Button
            variant="contained"
            startIcon={<Send />}
            onClick={async () => {
              const response = await verifyUser();
              if (response?.error) {
                setemailSent(false);
                handleToggle();
                return;
              }
              handleToggle();
            }}
            sx={{
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
              },
            }}
          >
            Verify Email
          </Button>
        )}
      </Box>

      {/* Notification Backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {emailSent ? (
          <Alert severity="success" sx={{ borderRadius: 2 }}>
            ✉️ Verification Email Sent Successfully!
          </Alert>
        ) : (
          <Alert severity="error" sx={{ borderRadius: 2 }}>
            An error occurred. Please try again.
          </Alert>
        )}
      </Backdrop>
    </Paper>
  );
}

export default UserDetails;
