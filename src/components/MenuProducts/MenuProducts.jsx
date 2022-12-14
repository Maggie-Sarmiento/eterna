import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Box, CircularProgress } from '@mui/material';
import Card from '../Subcomponents/Header/Card/Card';
import style from './MenuProducts'
import ModalDetails from "../Subcomponents/Header/Card/ModalDetails/ModalDetails";


const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
  width: '10em',
};

const MenuProducts = ({ dataProduct }) => {

  return (
    <section className={style.sectionMenu}>
      <Container>
        <>
          <Typography
            variant="h5"
            component="h2"
            marginBottom={3}
            marginTop={5}
            fontWeight={300}
          >
            PRODUCTOS
          </Typography>
            <Grid container spacing={3}  >
            { dataProduct.length === 0 ?
              <Box sx={{
                color: 'grey.500',
                display: 'flex',
                marginLeft: '43%',
                marginTop: '6em',

                }}>
                <Box sx={{ alignSelf: 'center' }} >
                  <CircularProgress color="inherit" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CircularProgress color="inherit" />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <CircularProgress color="inherit"  />
                </Box>
              </Box>
              : dataProduct.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  product={product}
                />
              ))}
            </Grid>
        </>
      </Container>
    </section>
  );
}

export default MenuProducts;