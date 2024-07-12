import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Home.css' 
import Home from './Home'
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <div className="krishna-mall">
      <header className="mall-header">
       <h1>Krishna Shopping Mall</h1>
       </header></div>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/Deals">Deals</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
      </ul>
      
    </nav>
    
  );
}

export default Navbar;
