import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';



const Header = () => {

    const context = useContext(MyContext); 



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
                        <div className="row ">
                            <div className="logowrapper d-flex align-items-center col-sm-2">
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>

                            <div className="col-sm-10 d-flex align-items-center part2">
                               
                                 {
                                    context.countryList.length!==0 && <CountryDropdown />
                                 }
                                
                                <SearchBox />


                                <div className="part3 d-flex align-items-center ml-auto">
                                    <Button className='circle me-3'><FiUser /></Button>
                                    <div className="ml-auto cartTab d-flex align-items-center">
                                        <span className='price'>$0.00</span>
                                        <div className="position-relative ms-2">
                                            <Button className='circle '><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center
                                        justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>

            </div>
        </>
    );
};

export default Header;
