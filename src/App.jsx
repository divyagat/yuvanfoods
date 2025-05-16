import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/index';
import Home from './Pages/Home/index'; // Ensure this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
