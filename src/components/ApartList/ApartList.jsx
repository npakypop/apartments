import Apartment from "components/Apartment/Apartment";
import { useDispatch, useSelector } from "react-redux";
import { deleteApartment } from "redux/apartments/api";
import { selectFilter } from "redux/filter/selectors";

function ApartList({ apartments }) {
  console.log("ApartList ~ apartments", apartments);
  const dispatch = useDispatch();
  const filterValue = parseInt(useSelector(selectFilter));
  console.log(typeof filterValue);

  console.log("filter", filterValue);

  const onDeleteApartment = (apartId) => {
    dispatch(deleteApartment(apartId));
  };

  const getFilteredApartments = () => {
    return filterValue
      ? apartments.filter((item) => item.rooms === filterValue)
      : apartments;
  };

  const filteredApartments = getFilteredApartments();
  console.log(filteredApartments);

  return (
    <>
      <h2>Here must be a list of avaliable apartments</h2>
      <ul>
        {filteredApartments.map((item) => (
          <li key={item.id}>
            <Apartment item={item} onDeleteApartment={onDeleteApartment} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApartList;
