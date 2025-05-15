import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <>
      <div className="headerSearch ml-3 mr-3 ms-4 ">
        <input type="text" placeholder="Search For Products..." />
        <button><FaSearch /></button>
      </div>
    </>
  )
}
export default SearchBox;