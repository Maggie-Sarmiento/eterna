import React, { useState, useEffect } from "react"
import style from './Container.module.css';
import { TextField } from "@mui/material";
import MenuProducts from "../MenuProducts/MenuProducts";

const Container = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    console.log('use effe')
    const requestOption = {
      method: 'GET'
    };
    fetch('https://gnk.onm.mybluehost.me/products_api/', requestOption)
    .then((response) => response.json())
    .then((data) => setDataProduct(data));
  }, [refreshData]);
  
  
  const [word, setWord] = useState('')
  const getData = (e) => {
    setWord(e.target.value)
  }

  let dataFiltered;
  if (word) {
    let reg = RegExp(word, 'i')
    dataFiltered = dataProduct.filter((product) => product.title.match(reg))
  }


  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <h2>ETERNA</h2>
          <TextField 
            id="outlined-basic" 
            label="Buscar" 
            variant="outlined" 
            onKeyUp={(e) => getData(e)}
          />
        </nav>
      </header>
      <MenuProducts 
        dataProduct={word ? dataFiltered : dataProduct} 
      />
    </>
  );
}

export default Container;