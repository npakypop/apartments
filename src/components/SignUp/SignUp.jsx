import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { db } from "firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "redux/auth/authSlice";
import { Box, Typography } from "@mui/material";

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (data) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: data.username,
      });
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: data.username,
        email: data.email,
      });
      dispatch(
        setUser({
          token: user.accessToken,
          userName: user.displayName,
        })
      );
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      alert("something went wrong");
      console.log(error.message);
    }
  };

  const onSignUp = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
      username: form.elements.username.value,
    };
    register(data);
    form.reset();
  };

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
        Sign Up
      </Typography>
      <Form title="signup" onClick={onSignUp} />
      <Typography component="p">
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </Box>
  );
}

export default SignUp;

//! код ниже для того что бы  загружать в профиль фотографию при регистрации
//   const storageRef = ref(storage, `images/${data.username}`);
//   const uploadTask = uploadBytesResumable(storageRef, data.file);

//   uploadTask.on(
//     (error) => {
//       console.log(error.message);
//       alert(error.message);
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//         //upd user profile
//         await updateProfile(user, {
//           displayName: data.username,
//           photoURL: downloadURL,
//         });
//         //store user data in firestore database
//         await setDoc(doc(db, "users", user.uid), {
//           uid: user.uid,
//           displayNmae: data.username,
//           email: data.email,
//         //   photoURL: downloadURL,
//         });
//       });
//     }
//   );
