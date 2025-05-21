import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CountryDropdown from '../CountryDropdown';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';



function Header() {
  const context = useContext(MyContext);
  
  return (
    <div className="headerWrapper">
      <div className="top-strip">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            yuvanfoods online shop for less price
          </p>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
              <Link to="/">
                <img
                  src="src/assets/images/yuvan_logo_e-removebg-preview.png"
                  alt="logo"
                  className="img-fluid"
                />
              </Link>
            </div>
            <div className="col-sm-10 d-flex align-items-center part2">
              {context.countryList.length !== 0 && <CountryDropdown />}
              <SearchBox />
              <div className="d-flex align-items-center part3 mx-auto ms-4">
                <Button className="circle">
                  <FiUser />
                </Button>
                <div className="ml-auto cartTab d-flex align-items-center">
                  <span className="price mt-2">$3.29</span>

                  <div className="position-relative ml-2 ms-3">
                    <Button className="circle">
                      <FiShoppingCart />
                    </Button>
                    <span className="count d-flex align-items-center justify-content-center">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </div>
  );
}

export default Header;
