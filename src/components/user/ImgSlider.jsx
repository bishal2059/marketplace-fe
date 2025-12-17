import React, { useState } from 'react';
import { Box, Modal, IconButton, Fade } from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

function ImgSlider(props) {
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(0);
  const imgList = props?.images || [];

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          paddingTop: '75%',
          overflow: 'hidden',
          cursor: 'pointer',
          backgroundColor: '#f5f5f5',
          '&:hover .zoom-icon': {
            opacity: 1,
          },
        }}
        onClick={handleOpen}
      >
        <Box
          component="img"
          src={props?.thumbnail}
          alt="thumbnail"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
        />
        <Box
          className="zoom-icon"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            p: 1,
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <ZoomInIcon sx={{ color: 'white', fontSize: 28 }} />
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'relative',
              outline: 'none',
              maxWidth: '90vw',
              maxHeight: '90vh',
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: 'white',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 10,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Previous Button */}
            {number > 0 && (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  setNumber(number - 1);
                }}
                sx={{
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <NavigateBeforeIcon sx={{ fontSize: 32 }} />
              </IconButton>
            )}

            {/* Image */}
            <Box
              component="img"
              src={imgList[number] || props?.thumbnail}
              alt="product"
              sx={{
                maxWidth: '85vw',
                maxHeight: '85vh',
                borderRadius: 2,
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                display: 'block',
              }}
            />

            {/* Next Button */}
            {number < imgList.length - 1 && (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  setNumber(number + 1);
                }}
                sx={{
                  position: 'absolute',
                  right: 10,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  },
                }}
              >
                <NavigateNextIcon sx={{ fontSize: 32 }} />
              </IconButton>
            )}

            {/* Image Indicators */}
            {imgList.length > 1 && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  borderRadius: 2,
                  px: 2,
                  py: 1,
                }}
              >
                {imgList.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setNumber(idx);
                    }}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: idx === number ? '#fff' : 'rgba(255, 255, 255, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: '#fff',
                        transform: 'scale(1.2)',
                      },
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default ImgSlider;
