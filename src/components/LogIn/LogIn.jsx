import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "redux/auth/authSlice";

function LogIn() {
  const dispatch = useDispatch();
  const login = async (data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredentials.user;
      console.log(user);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
          userName: user.displayName,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    login(data);
    form.reset();
  };
  return (
    <div>
      <Form title="login" onClick={onLogin} />
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LogIn;
