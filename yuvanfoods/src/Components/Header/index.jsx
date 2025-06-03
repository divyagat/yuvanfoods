import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import { IoSearchSharp } from "react-icons/io5";
import Button from '@mui/material/Button';

const Header = () => {
    return (
        <>
            <div className="header-Wrapper">
                {/* Top Strip */}
                <div className="topstrip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">
                            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight
                        </p>
                    </div>
                </div>

                {/* Main Header */}
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                            <div className="col-sm-10 d-flex align-items-center part2">

                                <CountryDropdown />


                                {/* {Header Search Start Here} */}
                                <div className="headerSearch ml-3 mr-3">
                                    <input type="text" />
                                    <Button variant="text"><IoSearchSharp /></Button>
                                </div>

                                {/* {Header Search Ends Here} */}

                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
