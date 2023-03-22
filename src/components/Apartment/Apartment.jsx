import { Box, Button, Typography } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

function Apartment({ item, onDeleteApartment }) {
  return (
    <Box
      sx={{
        border: 1,
        mb: 5,
        p: 2,
        borderRadius: 1,
        background:
          "linear-gradient(to bottom, rgba(255, 131, 122, 0.25), rgba(239, 152, 207, 0.25))",
      }}
    >
      <Typography variant="h4">{item.name}</Typography>
      <Typography component="p" color="primary">
        <strong>Rooms:</strong> {item.rooms}
      </Typography>
      <Typography component="p" color="primary">
        <strong> Price:</strong> {item.price}
      </Typography>
      <Typography component="p" color="primary">
        {item.description}
      </Typography>
      <Button
        type="button"
        onClick={() => onDeleteApartment(item.id)}
        endIcon={<DeleteForeverRoundedIcon />}
        color="error"
      >
        Delete
      </Button>
      <Button
        type="button"
        endIcon={<StarBorderRoundedIcon />}
        color="secondary"
      >
        Add to favorite
      </Button>
    </Box>
  );
}

export default Apartment;
