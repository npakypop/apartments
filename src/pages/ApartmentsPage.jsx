import AddForm from "components/AddForm/AddForm";
import ApartList from "components/ApartList/ApartList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApartments } from "redux/apartments/selectors";
import { fetchApartments } from "redux/apartments/api";
import Filter from "components/Filter/Filter";
import { Navigate } from "react-router";
import { useAuth } from "hooks/useAuth";

function ApartmentsPage() {
  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h2>Apartments page</h2>
      <p>Number of avaliable apartments at the time {apartments.length}</p>
      <AddForm />
      <Filter />
      <ApartList apartments={apartments} />
    </div>
  );
}

export default ApartmentsPage;
