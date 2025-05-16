import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index'; // Replace with your actual Home component path
import Header from './Components/Header/index';

function App() {
  const [countryList, setCountryList] = useState([]); // ✅ Fix: 'const' instead of 'Const'
const [selectedCountry, setselectedCountry] = useState("");
  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      const response = await axios.get(url); // ✅ Cleaner async/await pattern
      setCountryList(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching countries:", error); // ✅ Added error handling
    }
  };

  const values = {
    countryList, // ✅ Provide the country list via context
    setselectedCountry,
    selectedCountry
  };

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
export { MyContext };
