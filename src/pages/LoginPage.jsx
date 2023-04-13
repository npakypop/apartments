import { Box } from "@mui/material";
import LogIn from "components/LogIn/LogIn";

function LoginPage() {
  return (
    <Box
      component="section"
      sx={{
        height: "100vh",
        background:
          "radial-gradient(circle, rgba(68,49,57,1) 0%, rgba(65,76,89,1) 99%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogIn />
    </Box>
  );
}

export default LoginPage;
