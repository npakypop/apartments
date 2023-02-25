import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { fetchApartments } from "redux/apartments/api";
import { logout } from "redux/auth/authOperations";
import { selectToken } from "redux/auth/selectors";

function Layout({ children }) {
  const onLogOut = () => {
    logout();
  };

  return (
    <div>
      <span>Logo</span>
      <nav>
        <NavLink to="./"> Home </NavLink>
        <input type="search" placeholder="Search" />
        <div>
          <NavLink to="./apartments">Apartments </NavLink>
          <NavLink to="./register">Sign up </NavLink>
          <NavLink to="./login">Log in </NavLink>
        </div>
        <button onClick={onLogOut}>log out</button>
      </nav>
      <p>---------------------------Content-----------------------------</p>

      <div>{children}</div>
    </div>
  );
}

export default Layout;
