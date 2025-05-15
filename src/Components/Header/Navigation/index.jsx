import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";

const Navigation = ()=>{
    return(
        <>
        <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 navPart1">
              <button className='allCatTab align-items-center '>
                <span className='icon1'><IoMdMenu /></span>
                <span className='text mx-2'>All CATEGORIES</span>
                <span className='icon2'><TfiAngleDown /></span>
              </button>
            </div>
            <div className="col-sm-9 navPart2">

            </div>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Navigation;