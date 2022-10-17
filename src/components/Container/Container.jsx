import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import style from './Container.module.css';
import { TextField } from "@mui/material";
import MenuProducts from "../MenuProducts/MenuProducts";

const Container = () => {
  const [refreshData, setRefreshData] = useState(false);

  // useState for multiples state 
  const [dataPagination, setDataPagination] = useState(
    {
      dataLoad: [], 
      page: 1,
      dataProduct: [],
      dataFiltered: []
    })
  
    
    // conection fetc with API
    useEffect(() => {  
      fetch('https://gnk.onm.mybluehost.me/products_api/')
      .then((response) => response.json())
      .then((data) => setDataPagination({...dataPagination, dataProduct: data, dataLoad: dataPerPage(data, 1, 16)}));
    }, [refreshData]);
  
  
  // function return dataPerpage 
  const dataPerPage = (data, page, perPage) => {
    let index, last 
    if (page === 1 || page <= 0) {
      index = 0,
      last = perPage
    } else if (page > data.length) {
      index = page - 1
      last = data.length
    } else {
      index = page * perPage - perPage
      last = index + perPage
    }
    
    return data.slice(index, last)
  }

  // get input.value, filter for input, save in datafiltered and dataLoad
  const getData = (e) => {
    if (e.target.value.length > 3) {
      let reg = RegExp(e.target.value, 'i')
      let dataFilter = dataPagination.dataProduct.filter((product) => product.title.match(reg))
      let data = dataPerPage(dataFilter, 1, 16)
      setDataPagination({...dataPagination, dataLoad: data, dataFiltered: dataFilter, page: 1})
    } else if (e.target.value.length < 4) {
      setDataPagination({...dataPagination, dataLoad: dataPerPage(dataPagination.dataProduct, 1, 16)})
    }
  }

  // function that reload the pages of elments
  const morePage = () => {
    let data = dataPagination.dataFiltered.length === 0 ? dataPagination.dataProduct : dataPagination.dataFiltered

    console.log('morePags')
    console.log(dataPagination.page)

    setDataPagination(
      {
        ...dataPagination, 
        dataLoad: dataPagination.dataLoad.concat(dataPerPage(data, dataPagination.page + 1, 16)), 
        page: dataPagination.page + 1 
      }
    )
  }

  // method infinite scroll of react
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
      <InfiniteScroll
        dataLength={dataPagination.dataLoad.length}
        next={() => morePage()}
        hasMore={true}
        scrollableTarget="scrollableDiv"
        >
        <MenuProducts 
          dataProduct={dataPagination.dataLoad}
        />
      </InfiniteScroll>
    </>
  );
}

export default Container;