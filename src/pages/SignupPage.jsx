import { Box } from "@mui/material";
import SignUp from "components/SignUp/SignUp";

function SignupPage() {
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
      <SignUp />
    </Box>
  );
}

export default SignupPage;
