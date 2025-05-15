import { FaAngleDown } from "react-icons/fa";

const CountryDropdown = () => {
    return (
        <>
            <button className='countryDrop d-flex '>
                <div className="info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className="name">India</span>
                </div>
                <span className="ml-auto "><FaAngleDown /></span>
            </button>
        </>
    );
};

export default CountryDropdown;
