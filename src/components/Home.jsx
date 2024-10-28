import React from 'react';
import styles from "./Home.module.css"
import  WomenImage from "../assets/sam-mcnamara-p0ZvBVpW3KY-unsplash.jpg";
import { useContext,useEffect } from 'react';
import ThemeContext from "../context/theme-context"

export default function Home() {
  const { theme,getTheme}=useContext(ThemeContext);

   useEffect(()=>{
    getTheme();

   },[]);

  return (
    <section className={styles[`viewport-${theme}`]}>
      <section className={styles.container} >
        <img src={WomenImage} alt="for design" className={styles.image} />
        <section className={styles[`text-${theme}`]}>
          <p>This webpage showcases a theme switcher app built using React's useContext for state management. It allows users to seamlessly toggle between light and dark themes, providing a more personalized browsing experience.</p>
          <p> By leveraging the power of context, the app efficiently manages the theme state across different components without needing to pass props. The use of useContext makes the code cleaner and more scalable, ensuring that any component can easily access the current theme. Enjoy experimenting with the different themes!"</p>


      </section>

    

      </section>
    </section>
  )
}
