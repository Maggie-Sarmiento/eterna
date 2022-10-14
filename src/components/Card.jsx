import {
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import styles from './Card.module.css'

const threeMenuStyle = {
  display: 'flex',
  justifyContent: 'end',
  position: 'absolute',
  top: '-10px',
  right: '0',
  padding: '0',
  transform: 'rotate(-90deg)',
};

const btnAdd = {
  display: 'flex',
  justifyContent: 'end',
  position: 'absolute',
  top: '-10px',
  right: '0',
  padding: '0',
};

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const Card = ({id, 
  product,
 refreshData, setRefreshData,
}) => (
  <Grid item xs={6} sm={3}>
    <ThemeProvider theme={theme}>
      <Paper elevation={3} className="paper">
        <img src={product.img} alt="" className={styles.imgCard} />
        <Box
          sx={{
            paddingX: 1,
            position: 'relative',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              marginTop={0.5}
            >
            </Box>
          </Box>
          <Typography
            variant="subtitle1"
            component="h2"
            className={styles.productName}
            sx={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: '0.8em',
            }}
          >
            {product.title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              className={styles.productPrice}
              sx={{
                fontSize: '0.8em',
              }}
            >
              $&nbsp;
              {product.price}
              &nbsp;MXN
            </Typography>
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  </Grid>
);

export default Card;
