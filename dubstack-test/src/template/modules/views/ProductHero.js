import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
'../../../images/pexels-ben-taylor-109998.jpg'
export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url${backgroundImage}`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Read. Write. Connect.      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Join the fastest-growing blogger community
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup/"
        sx={{ minWidth: 200 }}
      >
        Create an Account
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Join the Conversation
      </Typography>
    </ProductHeroLayout>
  );
}
