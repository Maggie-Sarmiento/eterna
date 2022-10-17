import React, { useState, useEffect } from "react"
import style from './Container.module.css';
import { TextField } from "@mui/material";
import MenuProducts from "../MenuProducts/MenuProducts";

const Container = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch('https://gnk.onm.mybluehost.me/products_api/')
    .then((response) => response.json())
    .then((data) => setDataProduct(data));
  }, [refreshData]);
  
  
  const [word, setWord] = useState('')
  const getData = (e) => {
    setWord(e.target.value)
  }

  let dataFiltered = dataProduct
  if (word) {
    let reg = RegExp(word, 'i')
    dataFiltered = dataProduct.filter((product) => product.title.match(reg))
  }

  const pagination = (page, perPage) => {
    let index, last 

    if (page === 1 || page <= 0) {
      index = 0,
      last = perPage
    } else if (page > dataProduct.length) {
      index = page - 1
      last = dataProduct.length
    } else {
      index = page * perPage - perPage
      last = index + perPage
    }

    return dataFiltered.slice(index, last)
  }


  return (
    <>
      <header className={style.header} >
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
      <div>
        <MenuProducts 
          dataProduct={pagination(page, 12)}
        />
      </div>
    </>
  );
}

export default Container;