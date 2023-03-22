import { Button } from "@mui/material";

function MyButton({ children, ...props }) {
  return (
    <Button
      sx={{ borderRadius: 1 }}
      variant="outlined"
      component={props.component}
      color={props.color}
      to={props.to}
      onClick={props.onClick}
      type={props.type}
    >
      {children}
    </Button>
  );
}

export default MyButton;
