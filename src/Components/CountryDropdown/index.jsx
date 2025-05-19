import { useState, useContext, useEffect } from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";

const CountryDropdown = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const context = useContext(MyContext);

  const selectedCountry = (index, country) => {
    setSelectedTab(index);
    setIsOpenModel(false);
    context.setselectedCountry(country);
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();
    if (keyword !== "") {
      const filtered = context.countryList.filter((item) =>
        item.country.toLowerCase().includes(keyword)
      );
      setCountryList(filtered);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <>
      <button className="countryDrop d-flex" onClick={() => setIsOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {context.selectedCountry !== "" ? context.selectedCountry : "Select Location"}
          </span>
        </div>
        <span className="ml-auto">
          <FaAngleDown />
        </span>
      </button>
      <Dialog open={isOpenModel} onClose={() => setIsOpenModel(false)} className="locationModal">
        <h4 className="mb-0">Choose your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModel(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <FaSearch />
          </Button>
        </div>
        <ul className="countryList mt-3">
          {countryList.length !== 0 &&
            countryList.map((item, index) => (
              <li key={index}>
                <Button
                  onClick={() => selectedCountry(index, item.country)}
                  className={selectedTab === index ? "active" : ""}
                >
                  {item.country}
                </Button>
              </li>
            ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDropdown;   