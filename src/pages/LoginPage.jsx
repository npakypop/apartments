import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "helprers/firebase";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log("user", user);

  return (
    <div>
      <h1>Log in</h1>
      <input
        type="mail"
        name="mail"
        placeholder="Your mail"
        onChange={(event) => {
          setLoginEmail(event.target.value);
        }}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        onChange={(event) => {
          setLoginPassword(event.target.value);
        }}
        required
      />
      <button onClick={login}>Log in</button>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
