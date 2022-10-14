import React, { useState } from "react"
import style from './Container.module.css';
import { TextField } from "@mui/material";
import MenuProducts from "../MenuProducts/MenuProducts";

const Container = () => {
  const [word, setWord] = useState('')
  
  const getData = (e) => {
    setWord(word + e.key)
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
      <MenuProducts word={word} />
    </>
  );
}

export default Container;