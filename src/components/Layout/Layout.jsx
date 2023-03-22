import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { auth } from "firebase.config";
import { signOut } from "firebase/auth";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeUser } from "redux/auth/authSlice";

function Layout({ children }) {
  const { userName, isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const onLogOut = () => {
    try {
      signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Box>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h4" component="span" color="primary">
          AIRBNB
        </Typography>
        {isLoggedIn ? (
          <>
            <nav>
              <Button component={NavLink} color="primary" to="./">
                Home
              </Button>
              <Button component={NavLink} color="primary" to="./apartments">
                Apartments
              </Button>
            </nav>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TextField label="Search" type="search" size="small" />
              <Typography color="primary">WELKOM {userName}</Typography>
              <Button variant="contained" onClick={onLogOut} color="primary">
                log out
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button component={NavLink} color="primary" to="./">
              Home
            </Button>
            <nav>
              <Button component={NavLink} to="./register" variant="contained">
                Sign up
              </Button>
              <Button component={NavLink} to="./login" variant="contained">
                Log in
              </Button>
            </nav>
          </Box>
        )}
      </Container>
      <Box>{children}</Box>
    </Box>
  );
}

export default Layout;

// <Navigate to="/login" replace={true} />
