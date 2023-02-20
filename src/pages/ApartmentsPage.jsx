import ApartList from "components/ApartList/ApartList";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchApartments } from "redux/api";

function ApartmentsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  return (
    <div>
      <div>apart</div>
      <ApartList />
    </div>
  );
}

export default ApartmentsPage;
