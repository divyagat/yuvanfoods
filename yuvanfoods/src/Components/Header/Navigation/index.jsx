import Button from '@mui/material/Button';
import { IoMenu } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsCupHot } from "react-icons/bs";

const Navigation = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <Button className='allCatTab align-items-center'>
                                <span className='icon1 me-3'><IoMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2 ms-3'><FaAngleDown /></span>
                            </Button>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className='list list-inline ms-auto d-flex align-items-center'>
                                <li className="list-inline-item "><Link to="/"><CiHome />  &nbsp; HOME</Link></li>
                                <li className="list-inline-item "><Link to="/">SHOP</Link></li>
                                <li className="list-inline-item"><Link to="/"><IoFastFoodSharp /> &nbsp; MATS & SEAFOODS</Link></li>
                                <li className="list-inline-item"><Link to="/">BAKERY</Link></li>
                                <li className="list-inline-item"><Link to="/"><BsCupHot /> &nbsp; BEVERAGES</Link></li>
                                <li className="list-inline-item"><Link to="/">BLOG</Link></li>
                                <li className="list-inline-item"><Link to="/">CONTACT</Link></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navigation;
