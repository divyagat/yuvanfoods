import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MyContext } from '../../App'; // Adjust path as needed

const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { countryList } = useContext(MyContext);
  const [selectedTab, setSelectedTab] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const selectCountry = (index, country) => {
    setSelectedTab(index);
    setSelectedCountry(country);
    setOpen(false);
  };

  const filteredCountries = countryList?.filter((item) =>
    item.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Button className='countryDrop' onClick={handleClickOpen}>
        <div className='info d-flex flex-column'>
          <span className='label'>YOUR LOCATION</span>
          <span className='name'>{selectedCountry}</span>
        </div>
        <span className='ml-auto'><FaAngleDown /></span>
      </Button>

      <Dialog open={open} onClose={handleClose} className='locationModal'>
        <div>
          <Button className='close_' onClick={handleClose}>
            <IoClose />
          </Button>

          <h4 className='mb-0'>Choose your Delivery Location</h4>
          <p>Enter your address and we will specify the offer for your area.</p>

          <div className="headerSearch w-100">
            <input
              type='text'
              placeholder='Search your area...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button className='searchBtn'><IoIosSearch /></Button>
          </div>

          <ul className='countryList mt-3'>
            {filteredCountries?.length > 0 ? (
              filteredCountries.map((item, index) => (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectedTab === index ? 'active' : ''}`}
                  >
                    {item.country}
                  </Button>
                </li>
              ))
            ) : (
              <li>No matching countries found</li>
            )}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default CountryDropdown;
