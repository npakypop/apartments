import React from "react";

function Form({ title, onClick }) {
  return (
    <form onSubmit={onClick}>
      <input type="email" name="email" placeholder="Your email" required />
      <input
        type="password"
        name="password"
        placeholder="Your password"
        required
      />
      {title === "signup" && (
        <input type="text" name="username" placeholder="Your name" required />
      )}
      <br />
      <input type="checkbox" name="agreement" value="agreement" />
      <p>I agree to this website's privacy policy and terms of service</p>
      <button type="submit">{title}</button>
    </form>
  );
}

export default Form;
