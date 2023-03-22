import { Box } from "@mui/material";
import React from "react";

function Container({ children }) {
  return (
    <Box
      sx={{
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      {children}
    </Box>
  );
}

export default Container;
