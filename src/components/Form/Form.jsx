import { Box, Button, TextField, Typography } from "@mui/material";
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
        <Box>
          <TextField
            fullWidth
            type="text"
            name="username"
            label="Your name"
            required
          />
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "baseline",
              mt: "20px",
            }}
          >
            <input type="checkbox" name="agreement" value="agreement" />
            <Typography component="p">
              I agree to this website's privacy policy and terms of service
            </Typography>
          </Box>
        </Box>
      )}
      <Button
        sx={{ borderRadius: 1 }}
        type="submit"
        fullWidth
        variant="contained"
      >
        {title}
      </Button>
    </form>
  );
}

export default Form;
