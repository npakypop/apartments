import { NavLink } from "react-router-dom";
import { fetchApartments } from "redux/apartments/api";

function Layout({ children }) {
  fetchApartments();
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
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
