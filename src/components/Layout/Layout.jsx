import { signOut } from "firebase/auth";
import { auth } from "helprers/firebase";
import { NavLink } from "react-router-dom";
import { fetchApartments } from "redux/apartments/api";

function Layout({ children }) {
  // fetchApartments();
  const logout = async () => {
    await signOut(auth);
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
        <button onClick={logout}>log out</button>
      </nav>
      <p>---------------------------Content-----------------------------</p>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
