import React from "react";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <div>
      <div>Logo</div>
      <h1>Sign Up</h1>
      <form>
        <input type="mail" name="mail" placeholder="Your mail" required />
        <input type="text" name="name" placeholder="Full nmae" required />
        <input
          type="password"
          name="password"
          placeholder="Your password"
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
