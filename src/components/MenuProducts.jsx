import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from '@mui/material';
import Card from './Card';
import style from './MenuProducts'
import Header from "./Header";


const btnStyle = {
  bgcolor: 'black',
  color: '#F3B240',
  fontWeight: 600,
  marginTop: '1em',
  marginRight: '50em',
  width: '10em',
};

const MenuProducts = ({ role }) => {
  const [dataProduct, setDataProduct] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);

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
          <Header />
          <Typography
            variant="h4"
            component="h2"
            marginBottom={3}
            marginTop={5}
          >
            Productos
          </Typography>
          <Grid container spacing={3}>
            {dataProduct.map((product) => (
              <Card
                key={product._id}
                product={product}
                refreshData={refreshData}
                setRefreshData={setRefreshData}
              />
            ))}
          </Grid>
        </>
      </Container>
    </section>
  );
}

export default MenuProducts;