import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index'; // Replace with your actual Home component path
import Header from './Components/Header/index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
