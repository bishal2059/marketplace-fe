import React from 'react';
import { Box, Container, Typography, Grid, Link as MuiLink } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              🛍️ Marketplace
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Your one-stop destination for premium products at unbeatable prices.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['About', 'Privacy', 'Terms', 'Support'].map((link) => (
                <MuiLink
                  key={link}
                  href="#"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.8,
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Customer Service
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Contact Us', 'FAQs', 'Shipping', 'Returns'].map((link) => (
                <MuiLink
                  key={link}
                  href="#"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    opacity: 0.8,
                    '&:hover': {
                      opacity: 1,
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {link}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Follow Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { Icon: FacebookIcon, link: '#' },
                { Icon: TwitterIcon, link: '#' },
                { Icon: LinkedInIcon, link: '#' },
                { Icon: GitHubIcon, link: '#' },
              ].map(({ Icon, link }, idx) => (
                <MuiLink
                  key={idx}
                  href={link}
                  sx={{
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Icon />
                </MuiLink>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Marketplace. All images belong to their respective owners.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mt: 1 }}>
            Designed & Developed by Bishal Sapkota
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
