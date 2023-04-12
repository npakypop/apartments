import { Box, TextField, Typography } from "@mui/material";
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
    <Box component="div" sx={{ marginBottom: "30px" }}>
      <Typography
        variant="subtitle"
        component="h2"
        sx={{
          marginBottom: "20px",
        }}
      >
        Filter by Rooms
      </Typography>
      <TextField
        type="text"
        size="small"
        placeholder="rooms"
        name="rooms"
        onChange={(event) => changeFilter(event.target.value)}
        value={filterValue}
      />
      {/* <input
        type="number"
        placeholder="rooms"
        name="rooms"
        onChange={(event) => changeFilter(event.target.value)}
        value={filterValue}
      /> */}
    </Box>
  );
}

export default Filter;
