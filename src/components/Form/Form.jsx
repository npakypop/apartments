import { Button, TextField } from "@mui/material";
import React from "react";

function Form({ title, onClick }) {
  return (
    <form onSubmit={onClick}>
      <TextField
        fullWidth
        type="email"
        name="email"
        label="Your email"
        required
      />
      <TextField
        fullWidth
        type="password"
        name="password"
        label="Your password"
        required
      />
      {title === "signup" && (
        <div>
          <TextField
            fullWidth
            type="text"
            name="username"
            label="Your name"
            required
          />
          <br />
          <input type="checkbox" name="agreement" value="agreement" />
          <p>I agree to this website's privacy policy and terms of service</p>
        </div>
      )}
      <Button sx={{ borderRadius: 1 }} type="submit" variant="contained">
        {title}
      </Button>
    </form>
  );
}

export default Form;
