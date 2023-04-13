import { Grid } from "@mui/material";
import Apartment from "components/Apartment/Apartment";

function ApartList({ apartments, onDeleteApartment }) {
  return (
    <>
      <Grid container spacing={7}>
        {apartments.map((item) => (
          <Grid xs={4} item key={item.id}>
            <Apartment item={item} onDeleteApartment={onDeleteApartment} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ApartList;
