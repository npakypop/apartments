import { Box, Typography } from "@mui/material";
import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { setUser } from "redux/auth/authSlice";
import { selectIsLoggedIn } from "redux/auth/selectors";

function LogIn() {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;

      dispatch(
        setUser({
          userName: user.displayName,
          token: user.accessToken,
          userID: user.uid,
          apartments: user.apartments,
        })
      );

      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    login(data);
    form.reset();
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace={true} />;
  }

  return isLoading ? (
    <h2>loading....</h2>
  ) : (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        p: "40px",
        borderRadius: 1,
      }}
    >
      <Typography variant="subtitle" component="h2">
        Log In
      </Typography>
      <Typography variant="body" component="p">
        Fill in your log in details below.
      </Typography>
      <Form title="login" onClick={onLogin} />
      <Typography component="p">
        Don't have an account? <Link to="/register">Sign up</Link>
      </Typography>
    </Box>
  );
}

export default LogIn;
