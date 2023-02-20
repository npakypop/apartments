import Apartment from "components/Apartment/Apartment";
import { useSelector } from "react-redux";
import { selectApartments } from "redux/apartmentsSlice/selectors";

function ApartList() {
  const apartments = useSelector((state) => state.apartments);
  console.log("aoa", apartments);

  return (
    <>
      <h2>Here must be a list of avaliable apartments</h2>
      <ul>
        {apartments.map((item) => (
          <li key={item.id}>
            <Apartment item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ApartList;
