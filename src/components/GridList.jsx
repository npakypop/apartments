import { Grid } from "@mui/material";
import * as React from "react";
import GridItem from "./Grid";

export default function Body() {
  return (
    <Grid sx={{ width: "98%", mt: 8 }} container>
      <Grid sx={{ m: "auto" }} container spacing={3}>
        <GridItem />
        <GridItem />
        <GridItem />
      </Grid>
    </Grid>
  );
}
