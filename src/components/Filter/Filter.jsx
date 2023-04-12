import { Box, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterApartments } from "redux/filter/filterSlice";
import { selectFilter } from "redux/filter/selectors";

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const changeFilter = (value) => {
    const num = parseInt(value);
    if (num < 1 || num > 99) {
      alert("enter correct amount");
      return;
    }
    dispatch(filterApartments(value));
  };

  return (
    <Box sx={{ marginBottom: "30px" }}>
      <TextField
        sx={{ width: "200px" }}
        type="text"
        size="small"
        placeholder="Filter by rooms"
        name="rooms"
        onChange={(event) => changeFilter(event.target.value)}
        value={filterValue}
      />
    </Box>
  );
}

export default Filter;
