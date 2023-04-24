import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "./apartment.jpg";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  // setDoc,
  updateDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUserID } from "redux/auth/selectors";
import { db } from "firebase.config";
import { useEffect, useState } from "react";
// import { selectApartments } from "redux/apartments/selectors";

function Apartment({ item, onDeleteApartment }) {
  // const favoriteApartments = useSelector(selectFavoriteApartments);
  // const apartments = useSelector(selectApartments);
  const userID = useSelector(selectUserID);
  const userRef = doc(db, "users", userID);

  const [favorite, setFavorite] = useState(false);
  // console.log("item", item);

  const checkFavoriteApartments = async () => {
    const userSnap = await getDoc(userRef);
    const userData = userSnap.data();
    // console.log("userData", userData);
    if (userData.apartments.favoriteApartments.includes(item.id)) {
      setFavorite(true);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  useEffect(() => {
    checkFavoriteApartments();
  }, []);

  const setFavoriteApartment = async () => {
    !favorite
      ? await updateDoc(userRef, {
          "apartments.favoriteApartments": arrayUnion(item.id),
        })
      : await updateDoc(userRef, {
          "apartments.favoriteApartments": arrayRemove(item.id),
        });
    setFavorite(!favorite);
  };

  // useEffect(() => {
  //   for (let i = 0; i < apartments.length; i += 1) {
  //     if (favoriteApartments.includes(apartments[i].id)) {
  //       setFavorite(true);
  //     }
  //   }
  // }, [apartments, favoriteApartments]);

  return (
    <Card
      sx={{
        maxWidth: 345,
        background:
          "linear-gradient(to bottom, rgba(255, 131, 250, 0.25), rgba(239, 152, 100, 0.25))",
      }}
    >
      <CardMedia image={Image} sx={{ height: 140 }} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography component="p" color="primary">
          <strong>Rooms:</strong> {item.rooms}
        </Typography>
        <Typography
          component="p"
          color="primary"
          className="overflow"
          sx={{ height: "150px", overflow: "auto" }}
        >
          {item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="span">
          Price: {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="button"
          onClick={() => onDeleteApartment(item.id)}
          color="error"
        >
          Delete
        </Button>
        <Button
          type="button"
          color="secondary"
          variant={favorite ? "contained" : "outlined"}
          onClick={setFavoriteApartment}
        >
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
}

export default Apartment;
