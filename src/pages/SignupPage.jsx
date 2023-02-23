import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "helprers/firebase";

function SignupPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // const onSignUp = (event) => {
  //   event.preventDefault();
  //   register();
  //   setRegisterEmail("");
  //   setRegisterPassword("");
  // };

  return (
    <div>
      {user?.email}
      <h1>Sign Up</h1>
      <form onSubmit={register}>
        <input
          type="mail"
          name="mail"
          placeholder="Your mail"
          required
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input type="text" name="name" placeholder="Full name" />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          required
        />
        <br />
        <input type="checkbox" name="agreement" value="agreement" />
        <p>I agree to this website's privacy policy and terms of service</p>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignupPage;
