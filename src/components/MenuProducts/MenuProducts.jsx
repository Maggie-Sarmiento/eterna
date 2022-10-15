import React, { useEffect, useState } from "react";
import { Container, createTheme, Grid, Typography } from '@mui/material';
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

const MenuProducts = ({ word }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [open, setOpen] = useState(false);

  const test = () => {
    console.log('test')
  }

  useEffect(() => {
    const requestOption = {
      method: 'GET'
    };
    fetch('https://gnk.onm.mybluehost.me/products_api/', requestOption)
      .then((response) => response.json())
      .then((data) => setDataProduct(data));
  }, [refreshData]);



  return (
    <section className={style.sectionMenu}>
      <Container>
        <>
          <Typography
            variant="h4"
            component="h2"
            marginBottom={3}
            marginTop={5}
          >
            Productos
          </Typography>
          {word ? 
            <Grid container spacing={3} >
            {dataProduct.filter((product) => {
              product.title.includes(word)
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  product={product}
                  onclick={test}
                />
              )}
            )}
          </Grid>
            :
            <Grid container spacing={3}  >
            {dataProduct.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                product={product}
              />
              ))}
            </Grid>
          }
        </>
      </Container>
    </section>
  );
}

export default MenuProducts;