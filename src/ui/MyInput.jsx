import { TextField } from "@mui/material";

function MyInput({ ...props }) {
  return (
    <TextField
      component={props.component}
      sx={{ pattingTop: 1, paddingBottom: 1, display: "block" }}
      variant="outlined"
      label={props.label}
      type={props.type}
      name={props.name}
      value={props.value}
      size={props.size}
    />
  );
}

export default MyInput;
