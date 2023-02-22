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
    <div>
      <h3>filter by rooms</h3>
      <input
        type="number"
        placeholder="rooms"
        name="rooms"
        onChange={(event) => changeFilter(event.target.value)}
        value={filterValue}
      />
    </div>
  );
}

export default Filter;
