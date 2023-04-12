import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import Image from "./apartment.jpg";

function Apartment({ item, onDeleteApartment }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background:
          "linear-gradient(to bottom, rgba(255, 131, 250, 0.25), rgba(239, 152, 100, 0.25))",
      }}
    >
      <CardMedia image={Image} sx={{ height: 140 }} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography component="p" color="primary">
          <strong>Rooms:</strong> {item.rooms}
        </Typography>
        <Typography
          component="p"
          color="primary"
          sx={{ height: "150px", overflowY: "auto" }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="button"
          onClick={() => onDeleteApartment(item.id)}
          color="error"
        >
          Delete
        </Button>
        <Button type="button" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // <Box
    //   sx={{
    //     border: 1,
    //     mb: 5,
    //     p: 2,
    //     borderRadius: 1,
    //     background:
    //       "linear-gradient(to bottom, rgba(255, 131, 122, 0.25), rgba(239, 152, 207, 0.25))",
    //   }}
    // >
    //   <Typography variant="h4">{item.name}</Typography>
    //   <Typography component="p" color="primary">
    //     <strong>Rooms:</strong> {item.rooms}
    //   </Typography>
    //   <Typography component="p" color="primary">
    //     <strong> Price:</strong> {item.price}
    //   </Typography>
    //   <Typography component="p" color="primary">
    //     {item.description}
    //   </Typography>
    //   <Button
    //     type="button"
    //     onClick={() => onDeleteApartment(item.id)}
    //     endIcon={<DeleteForeverRoundedIcon />}
    //     color="error"
    //   >
    //     Delete
    //   </Button>
    //   <Button
    //     type="button"
    //     endIcon={<StarBorderRoundedIcon />}
    //     color="secondary"
    //   >
    //     Add to favorite
    //   </Button>
    // </Box>
  );
}

export default Apartment;
