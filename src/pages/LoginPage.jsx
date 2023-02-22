import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <div>Logo</div>
      <h1>Log in</h1>
      <form>
        <input type="mail" name="mail" placeholder="Your mail" required />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          required
        />
        <button type="submit">Log in</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
