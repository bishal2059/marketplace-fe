import React, { useRef } from 'react';
import { useContext } from 'react';
import { TextField, InputAdornment, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PageContext from '../../contexts/Pages';

function Searchbar() {
  const search = useRef();
  const { setname } = useContext(PageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setname(search.current.value);
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: 2,
        mb: 3,
        borderRadius: 3,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        background: 'white',
      }}
    >
      <TextField
        fullWidth
        placeholder="Search for products..."
        inputRef={search}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#667eea' }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                type="submit"
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%)',
                  },
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
          sx: {
            borderRadius: 3,
            backgroundColor: '#f8f9fa',
            '& fieldset': {
              border: 'none',
            },
          },
        }}
      />
    </Paper>
  );
}

export default Searchbar;
