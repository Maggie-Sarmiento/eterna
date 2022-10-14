import React from "react"
import style from './Header.module.css';
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

const Header = () => (
  <header className={style.header}>
    <nav>
      <h2>ETERNA</h2>
      <TextField id="outlined-basic" label="Buscar" variant="outlined" />
    </nav>
  </header>
);

export default Header;