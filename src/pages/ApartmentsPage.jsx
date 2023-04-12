import AddForm from "components/AddForm/AddForm";
import ApartList from "components/ApartList/ApartList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectApartments } from "redux/apartments/selectors";
import { deleteApartment, fetchApartments } from "redux/apartments/api";
import Filter from "components/Filter/Filter";
import { Navigate } from "react-router";
import { useAuth } from "hooks/useAuth";
import { Box, Button, Container, Typography } from "@mui/material";
import MyModal from "components/Modal/Modal";
import PriceSort from "components/PriceSort/PriceSort";
import { selectFilter, selectSort } from "redux/filter/selectors";

function ApartmentsPage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const dispatch = useDispatch();
  const apartments = useSelector(selectApartments);
  console.log("apartments:", apartments);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(fetchApartments());
  }, [dispatch]);

  //=====================
  const filterValue = parseInt(useSelector(selectFilter));
  console.log("filterValue:", filterValue);
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
  console.log("filteredApartments:", filteredApartments);

  const sortedApartments = [...filteredApartments].sort((a, b) => {
    if (sort === "inc") {
      return a.price - b.price;
    } else if (sort === "dec") {
      return b.price - a.price;
    } else {
      return apartments;
    }
  });
  //=======================

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <Box component="section">
      <Container maxWidth="lg">
        {/* <Typography variant="h4" color="info">
          Apartments page
        </Typography> */}
        {/* <Button onClick={handleOpen} variant="contained" color="primary">
          Add apartment
        </Button> */}
        {/* <AddForm /> */}
        {/* <MyModal open={open} setOpen={setOpen} /> */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "30px",
          }}
        >
          <Box
            sx={{
              width: "250px",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography component="h2" variant="h2">
              {apartments.length}
            </Typography>
            <Typography component="h2" variant="h6">
              Number of avaliable apartments at the time
            </Typography>
          </Box>
          <PriceSort />
          <Filter />
        </Box>
        <ApartList
          apartments={sortedApartments}
          onDeleteApartment={onDeleteApartment}
        />
      </Container>
    </Box>
  );
}

export default ApartmentsPage;
