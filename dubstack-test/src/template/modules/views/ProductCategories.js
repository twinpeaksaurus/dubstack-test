import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url:
      "/media/pexels-athena-2582937.jpg",
    title: "Tech",
    width: "40%"
  },
  {
    url:
      "/media/pexels-luriko-yamaguchi-2061678.jpg",
    title: "Film",
    width: "20%"
  },
  {
    url:
      "/media/pexels-essow-936722.jpg",
    title: "Finance",
    width: "40%"
  },
  {
    url:
      "/media/pexels-mikhail-nilov-8872482.jpg",
    title: "Politics",
    width: "38%"
  },
  {
    url:
      "/media/pexels-elevate-1267320.jpg",
    title: "Recipes",
    width: "38%"
  },
  {
    url:
      "/media/pexels-rajesh-kumar-verma-13267024.jpg",
    title: "Fashion",
    width: "24%"
  },
  {
    url:
      "/media/pexels-pixabay-164821.jpg",
    title: "Music",
    width: "40%"
  },
  {
    url:
      "/media/pexels-guduru-ajay-bhargav-863988.jpg",
    title: "Fitness",
    width: "20%"
  },
  {
    url:
      "/media/pexels-markus-spiske-97050.jpg",
    title: "Culture",
    width: "40%"
  }
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
