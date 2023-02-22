import AddForm from "components/AddForm/AddForm";
import ApartList from "components/ApartList/ApartList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApartments } from "redux/apartments/selectors";
import { fetchApartments } from "redux/apartments/api";
import Filter from "components/Filter/Filter";

function ApartmentsPage() {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <div>
      <div>apart</div>
      <p>Number of avaliable apartments at the time {apartments.length}</p>
      <AddForm />
      <Filter />
      <ApartList apartments={apartments} />
    </div>
  );
}

export default ApartmentsPage;
