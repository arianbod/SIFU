import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Grid } from "@mui/material/";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/slider_bg.png";
import SliderPic from "../../../assets/Slider_pic.png";
import ActionAreaCard from "./Stuff/TeamMember"; // Import the updated component
import CardImage1 from "../../../assets/Team/1.png";
import CardImage2 from "../../../assets/Team/2.png";
import CardImage3 from "../../../assets/Team/3.png";
import CardImage4 from "../../../assets/Team/4.png";

export default function SimpleContainer() {
  return (
    <div id="Team">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          // maxWidth: 500,
          margin: "12.5% auto", // Center align the content horizontally
          padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Box className="DMSans">
          <Typography sx={{ display: "inline" }} variant="h2">
            {Lang.Team.Title1}
          </Typography>
          <Typography sx={{ display: "inline" }} variant="h2" color="primary">
            {Lang.Team.Title2}
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            // backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            width: "100%",
            alignItems: "top",
            mt: 10,
          }}
        >
          <ActionAreaCard
            photo={CardImage1}
            name={Lang.Team.Member1.name}
            positionRole={Lang.Team.Member1.positionRole}
          />
          <ActionAreaCard
            photo={CardImage2}
            name={Lang.Team.Member2.name}
            positionRole={Lang.Team.Member2.positionRole}
          />
          <ActionAreaCard
            photo={CardImage3}
            name={Lang.Team.Member3.name}
            positionRole={Lang.Team.Member3.positionRole}
          />
          <ActionAreaCard
            photo={CardImage4}
            name={Lang.Team.Member4.name}
            positionRole={Lang.Team.Member4.positionRole}
          />
        </Grid>
      </Box>
    </div>
  );
}
