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
    <div>
      <span>Logo</span>
      <nav>
        <NavLink to="./"> Home </NavLink>
        <input type="search" placeholder="Search" />
        <div>
          <NavLink to="./apartments">Apartments </NavLink>
          {isLoggedIn ? (
            <div>
              <div>WELKOM {userName}</div>
              <button onClick={onLogOut}>log out</button>
            </div>
          ) : (
            <div>
              <NavLink to="./register">Sign up </NavLink>
              <NavLink to="./login">Log in </NavLink>
            </div>
          )}
        </div>
      </nav>
      <p>---------------------------Content-----------------------------</p>
      <div>{children}</div>
    </div>
  );
}

export default Layout;

// <Navigate to="/login" replace={true} />
