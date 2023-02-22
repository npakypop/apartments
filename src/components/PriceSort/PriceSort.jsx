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
    <select name="sort" value={sort} onChange={handleChange}>
      <option value="">Sort By</option>
      <option value="inc">lowest to highest</option>
      <option value="dec">highest to lowest</option>
    </select>
  );
}

export default PriceSort;
