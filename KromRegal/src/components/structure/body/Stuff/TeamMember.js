import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ photo, name, positionRole }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        m: 2,
        borderRadius: 5,
        backgroundColor: "rgb(32 32 36)!important",
      }}
      className="RoadMapSection"
    >
      <CardMedia
        component="img"
        // width="100px"
        image={photo}
        alt="Team Member"
        sx={{ maxWidth: "300px", padding: 5 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {positionRole}
        </Typography>
      </CardContent>
    </Card>
  );
}
