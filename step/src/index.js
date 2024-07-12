// import React from 'react';
// import ReactDOM from 'react-dom';
// //import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {BrowserRouter as Router,Routes,Link,Route} from 'react-dom/client'
// import App from './App';
// import Navbar from './components/Navbar';
// import reportWebVitals from './reportWebVitals';

// //import { Router } from 'express';
// //import Navbar from './components/Navbar';

// ReactDOM.createRoot(document.getElementById('root')).render(
//  <Router>
//     <div>
//       {/* <Navbar/> */}
//       <App/>
//     </div>
//  </Router>
// );
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
// import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <div>
        {/* <Navbar /> */}
        
          <App />
        
      </div>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
