import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const Navigation = ()=>{
    return(
        <>
        <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <button className='allCatTab align-items-center mt-2'>
                <span className='icon1'><IoMdMenu /></span>
                <span className='text mx-2'>All CATEGORIES</span>
                <span className='icon2'><TfiAngleDown /></span>
              </button>
            </div>
            <div className="col-sm-9 navPart2 d-flex align-items-center ">
               <ul className=" list list-inline mx-auto">
                <li className='list-inline-item'><Link to="/">Home</Link></li>
                <li className='list-inline-item'><Link to="/">Fashion</Link></li>
                <li className='list-inline-item'><Link to="/">Electronics</Link></li>
                <li className='list-inline-item'><Link to="/">Bakery</Link></li>
                <li className='list-inline-item'><Link to="/">Glocery</Link></li>
                <li className='list-inline-item'><Link to="/">Blog</Link></li>
                <li className='list-inline-item'><Link to="/">Contact Us</Link></li>
               </ul>
            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navigation;