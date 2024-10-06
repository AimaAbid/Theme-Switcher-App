import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
import { useContext } from 'react';
import ThemeContext from "../context/theme-context"

export default function Footer() {
  var {theme}=useContext(ThemeContext);
  return (
   
      <footer className={styles[`footer-${theme}`]}>
       
        <Link to="/">&copy; 2024 Made with React.</Link>
        


    </footer>

  )
}
