// Navigation.jsx
import React, { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Navigation = () => {
  const [isOpenSidebarval, setIsOpenSidebarVal] = useState(false);

  return (
    <nav>
      <div className="container">
        <div className="row">
          {/* Left Section: All Categories Button */}
          <div className="col-sm-3 navPart1">
            <div className="catWrapper">
              <button
                className="allCatTab d-flex align-items-center mt-2"
                onClick={() => setIsOpenSidebarVal(!isOpenSidebarval)}
              >
                <span className="icon1"><IoMdMenu /></span>
                <span className="text mx-2">All CATEGORIES</span>
                <span className="icon2"><TfiAngleDown /></span>
              </button>

              {/* Sidebar Category List */}
              <div className={`sidebarNav ${isOpenSidebarval ? 'open' : ''}`}>
                <ul>
                  <li>
                    <Link to="/"><Button>Men</Button></Link>
                    <ul className="submenu1">
                      <li><Link to="/"><Button>Clothing</Button></Link></li>
                      <li><Link to="/"><Button>Footwear</Button></Link></li>
                      <li><Link to="/"><Button>Watches</Button></Link></li>
                    </ul>
                  </li>
                  <li><Link to="/"><Button>Home</Button></Link></li>
                  <li><Link to="/"><Button>Women</Button></Link></li>
                  <li><Link to="/"><Button>Beauty</Button></Link></li>
                  <li><Link to="/"><Button>Kids</Button></Link></li>
                  <li><Link to="/"><Button>Gift</Button></Link></li>
                </ul>
              </div>


            </div>
          </div>

          {/* Right Section: Main Navigation */}
          <div className="col-sm-9 navPart2 d-flex align-items-center">
            <ul className="list list-inline mx-auto mb-0">
              <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
              <Link to="/"><Button>Men</Button></Link>
              <div className="submenu shadow position-relative">
                <Link to="/"><Button>Clothing</Button></Link>
                <Link to="/"><Button>Footwear</Button></Link>
                <Link to="/"><Button>Watches</Button></Link>
              </div>
              <li className="list-inline-item position-relative">
                <Link to="/"><Button>Men</Button></Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item "><Link to="/">Women</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item position-relative"><Link to="/">Beauty</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item position-relative"><Link to="/">Kids</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item position-relative"><Link to="/">Gift</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item position-relative"><Link to="/">Blog</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
              <li className="list-inline-item position-relative"><Link to="/">Contact</Link>
                <div className="submenu shadow">
                  <Link to="/"><Button>Clothing</Button></Link>
                  <Link to="/"><Button>Footwear</Button></Link>
                  <Link to="/"><Button>Watches</Button></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
