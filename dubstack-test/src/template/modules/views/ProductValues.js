import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PsychologyIcon from '@mui/icons-material/Psychology';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <CheckBoxIcon sx={{ fontSize: 50 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Easy to Use
              </Typography>
              <Typography variant="h5">
                {`Create an account and blog. Select your favorite topics and get started.`}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <PsychologyIcon sx={{ fontSize: 100 }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                New Ideas
              </Typography>
              <Typography variant="h5">
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <NewspaperIcon sx={{fontSize:60}}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Newsletters
              </Typography>
              <Typography variant="h5">
                {`Create and subscribe to newsletters created by your favorite bloggers, delivered to readers by email.`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
