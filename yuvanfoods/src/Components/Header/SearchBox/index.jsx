import Button from '@mui/material/Button';
import { IoIosSearch } from "react-icons/io";


const SearchBox = () => {

    return (

        <>{/* {Header Search Start Here} */}
            <div className="headerSearch ms-3 me-3">
                <input type='text' placeholder='Search for products...' />
                <Button variant="text"><IoIosSearch /></Button>
            </div>

            {/* {Header Search Ends Here} */}

        </>
    )
}

export default SearchBox;

