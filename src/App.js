import React from "react";
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import "./App.css"

export default function App(){
  return(
    <div className="urbanist-text">
      <Header/>

     <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/register" element={<Register/>}></Route>
     </Routes>
  
    <Footer/>
    </div>
  )
}
