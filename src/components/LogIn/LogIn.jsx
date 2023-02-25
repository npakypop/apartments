import Form from "components/Form/Form";
import { auth } from "firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

function LogIn() {
  const login = async (data) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    const form = event.curretTarget;
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
