import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Register from './components/Register';
import Categories from './components/Categories'
import Deals from './components/Deals'


function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Deals" element={<Deals />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;





// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// function App(){
//   return(
//     <div>

//     </div>
//   )
// }
















