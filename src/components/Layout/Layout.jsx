// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { useState } from "react";
// import { fetchApartments } from "redux/apartments/api";
// import { selectToken } from "redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "redux/auth/authOperations";
import { selectIsLoggedIn } from "redux/auth/selectors";

function Layout({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
      {isLoggedIn && <h1>hello my sweety</h1>}
      <div>{children}</div>
    </div>
  );
}

export default Layout;
