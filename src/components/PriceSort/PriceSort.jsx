import { FormControl, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "redux/filter/filterSlice";
import { selectSort } from "redux/filter/selectors";

function PriceSort({ apartments }) {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setSortBy(event.target.value));
  };

  return (
    <>
      <FormControl size="small" sx={{ minWidth: 200, mb: "30px" }}>
        <Select
          value={sort}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "sort" }}
        >
          <MenuItem value="">
            <em>Sort by</em>
          </MenuItem>
          <MenuItem value="inc">Lowest to highest</MenuItem>
          <MenuItem value="dec">Highest to lowest</MenuItem>
        </Select>
      </FormControl>
      {/* <select name="sort" value={sort} onChange={handleChange}>
        <option value="">Sort By</option>
        <option value="inc">lowest to highest</option>
        <option value="dec">highest to lowest</option>
      </select> */}
    </>
  );
}

export default PriceSort;
