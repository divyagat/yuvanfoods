import { FaAngleDown } from "react-icons/fa";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModel, setisOpenModel]= useState(false);
    return (
        <>
            <button className='countryDrop d-flex ' onClick={()=>setisOpenModel(true)}>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto "><FaAngleDown /></span>
            </button>

            <Dialog open={isOpenModel} onClose={()=>setisOpenModel(false)}  className="locationModal ">
                <h4 className="mb-0">Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_" onClick={()=>setisOpenModel(false)}><IoClose /></Button>
                <div className="headerSearch   w-100">
                    <input type="text" placeholder="Search your area..." />
                    <Button><FaSearch /></Button>
                </div>

                <ul className="countryList mt-3 ">
                    <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Satara</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Solapur</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Satara</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Solapur</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Satara</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Solapur</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Satara</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Solapur</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Delhi</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Mumbai</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Pune</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Satara</Button></li>
                    <li><Button onClick={()=>setisOpenModel(false)}>Solapur</Button></li>
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
