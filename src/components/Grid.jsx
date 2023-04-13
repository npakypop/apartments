import { Box, ButtonBase, Grid, Paper, styled, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Img = styled("img")({
  width: "320px",
  borderTopLeftRadius: "4px",
  borderTopRightRadius: "4px",
});

export default function GridItem() {
  const [link, setLink] = useState("");

  useEffect(() => {
    const fetchLink = async () => {
      const response = await axios("https://picsum.photos/600/300");
      setLink(response.request.responseURL);
    };
    fetchLink();
  }, []);

  return (
    <Grid item>
      <Paper sx={{ width: 320 }}>
        <ButtonBase>
          <Img alt="image" src={link} />
        </ButtonBase>
        <Box sx={{ p: 1 }}>
          <Typography variant="subtitle1">Crowd Prediction</Typography>
          <Typography variant="caption">
            Crowd Predictions in Ford to forecast weekly vehicles sale volumes
            across business units
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
