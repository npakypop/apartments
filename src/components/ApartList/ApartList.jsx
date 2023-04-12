import { Typography } from "@mui/material";
import Apartment from "components/Apartment/Apartment";
import GridItem from "components/Grid";
import Body from "components/GridList";
import PriceSort from "components/PriceSort/PriceSort";
import { useDispatch, useSelector } from "react-redux";
import { deleteApartment } from "redux/apartments/api";
import { selectFilter, selectSort } from "redux/filter/selectors";

function ApartList({ apartments }) {
  const dispatch = useDispatch();
  const filterValue = parseInt(useSelector(selectFilter));
  const sort = useSelector(selectSort);

  const onDeleteApartment = (apartId) => {
    dispatch(deleteApartment(apartId));
  };

  const getFilteredApartments = () => {
    return filterValue
      ? apartments.filter((item) => item.rooms === filterValue)
      : apartments;
  };
  const filteredApartments = getFilteredApartments();
  console.log("ApartList ~ filteredApartments", filteredApartments);

  const sortedApartments = [...filteredApartments].sort((a, b) => {
    if (sort === "inc") {
      return a.price - b.price;
    } else if (sort === "dec") {
      return b.price - a.price;
    } else {
      return apartments;
    }
  });

  return (
    <>
      {/* <GridItem /> */}
      {/* <Body /> */}

      <Typography variant="subtitle" component="h2" sx={{ mb: "20px" }}>
        Here must be a list of avaliable apartments
      </Typography>
      <PriceSort />
      <ul>
        {sortedApartments.map((item) => (
          <li key={item.id}>
            <Apartment item={item} onDeleteApartment={onDeleteApartment} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApartList;
