import React from "react";
import Pic from "../img/card.png";
import {
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  CardContent,
  Typography,
} from "@mui/material";

function MainCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        title="Ram Sharma"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={Pic} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Marketplace is one of the quick and easiest to do an online shopping.
          It is very convinient and has many choices to choose from. It not only
          saves time also provides huge discout.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MainCard;
