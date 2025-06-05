import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

// Create and export context
export const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const res = await axios.get(url);
      console.log("Countries fetched:", res.data.data);
      setCountryList(res.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const values = {
    countryList,
  };

  return (
    <MyContext.Provider value={values}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
