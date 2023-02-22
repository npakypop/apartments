import { useDispatch, useSelector } from "react-redux";
import { setSortBy } from "redux/filter/filterSlice";
import { selectSort } from "redux/filter/selectors";

function PriceSort({ apartments }) {
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  //   const price = [200, 560, 5690, 12, 123, 258, 9874, 1000, 26000];

  //   function priceInc(a, b) {
  //     return a - b;
  //   }
  //   const sortedInc = price.sort(priceInc);

  //   function priceDec(a, b) {
  //     return b - a;
  //   }
  //   const sortedDec = price.sort(priceDec);

  const handleChange = (event) => {
    dispatch(setSortBy(event.target.value));
    // if (event.target.value === "inc") {
    //   return sortedInc;
    // } else if (event.target.value === "dec") {
    //   return sortedDec;
    // } else {
    //   return price;
    // }
  };

  return (
    <select name="sort" value={sort} onChange={handleChange}>
      <option value="inc">Increment</option>
      <option value="dec">Decrement</option>
    </select>
  );
}

export default PriceSort;
