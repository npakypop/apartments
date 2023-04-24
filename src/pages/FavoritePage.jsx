import ApartList from "components/ApartList/ApartList";
import { db } from "firebase.config";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApartments } from "redux/apartments/api";
import { selectApartments } from "redux/apartments/selectors";
import { selectFavoriteApartments, selectUserID } from "redux/auth/selectors";

const FavoritePage = () => {
  const [favoriteApartments, setFavoriteApartments] = useState([]);
  const apartments = useSelector(selectApartments);
  const userID = useSelector(selectUserID);
  const userRef = doc(db, "users", userID);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  //   const getFavoriteApartments = async () => {
  //     const userSnap = await getDoc(userRef);
  //     const userData = userSnap.data();
  //     return apartments.filter((item) =>
  //       userData.apartments.favoriteApartments.includes(item.id)
  //     );
  //   };

  //   const favoriteApartments = getFavoriteApartments();
  //   console.log("favoriteApartments", favoriteApartments);
  useEffect(() => {
    const getFavoriteApartments = async () => {
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      const favApartments = apartments.filter((item) =>
        userData.apartments.favoriteApartments.includes(item.id)
      );
      setFavoriteApartments(favApartments);
    };
    getFavoriteApartments();
  }, [apartments, userRef]);

  return (
    <div>
      {favoriteApartments.length > 0 ? (
        <ApartList
          apartments={favoriteApartments}
          // onDeleteApartment={onDeleteApartment}
        />
      ) : (
        <h2>There is nothing inside favorite</h2>
      )}
    </div>
  );
};

export default FavoritePage;
