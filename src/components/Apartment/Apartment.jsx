import {
  
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  
  Typography,
} from "@mui/material";
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
          className="overflow"
          sx={{ height: "150px", overflow: "auto" }}
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
   
  );
}

export default Apartment;
