import { Box, Button, Container, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon } from "../images/library.svg";

function HomePage() {
  return (
    <Box
      component="section"
      sx={{
        background:
          "linear-gradient(to bottom, rgba(255, 131, 122, 0.25), rgba(239, 152, 207, 0.25))",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 20,
          pb: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "460px" }}>
          <Typography variant="title" component="h1" sx={{ mb: "30px" }}>
            Access a library of free design resources
          </Typography>
          <Typography variant="body" component="p" sx={{ mb: "30px" }}>
            The best resources and books from around the web, collected and
            curated for your reading.
          </Typography>
          <Button component={NavLink} to="./login" variant="contained">
            Log in
          </Button>
        </Box>
        <Box component={Icon} width={350} height={350} />
      </Container>
    </Box>
  );
}

export default HomePage;
