import { useState, useContext, useEffect } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [cityList, setCityList] = useState([]);

  const { countryList, selectedCountry, setselectedCountry } = useContext(MyContext);

  useEffect(() => {
    setFilteredCountries(countryList);
  }, [countryList]);

  const fetchCities = async (country) => {
    try {
      const response = await fetch(`/api/cities?country=${country}`);
      const data = await response.json();
      return data.cities; // Adjust according to your actual API response
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  };

  const handleCountrySelect = async (index, country) => {
    setSelectedIndex(index);
    setIsModalOpen(false);

    const cities = await fetchCities(country);
    setCityList(cities);

    setselectedCountry(country, cities); // Call context function with updated cities
  };

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = keyword
      ? countryList.filter(({ country }) =>
          country.toLowerCase().includes(keyword)
        )
      : countryList;
    setFilteredCountries(filtered);
  };

  return (
    <>
      <button className="countryDrop d-flex" onClick={() => setIsModalOpen(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {selectedCountry || "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </button>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="locationModal">
        <div className="modalHeader">
          <h4 className="mb-0">Choose your Delivery Location</h4>
          <p>Enter your address and we will specify the offer for your area.</p>
          <Button className="close_" onClick={() => setIsModalOpen(false)}>
            <IoClose />
          </Button>
        </div>

        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={handleSearch}
          />
          <Button>
            <FaSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {filteredCountries.map(({ country }, index) => (
            <li key={index}>
              <Button
                onClick={() => handleCountrySelect(index, country)}
                className={selectedIndex === index ? "active" : ""}
              >
                {country}
              </Button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
