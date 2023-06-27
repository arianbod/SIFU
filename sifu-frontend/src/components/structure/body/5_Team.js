import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Grid } from "@mui/material/";

import Lang from "../../../lang/en.json";

import ActionAreaCard from "./Stuff/TeamMember"; // Import the updated component
import CardImage1 from "../../../assets/Team/1.png";
import CardImage4 from "../../../assets/Team/2.png";
import CardImage3 from "../../../assets/Team/3.png";
import CardImage2 from "../../../assets/Team/4.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function SimpleContainer() {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="Team">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          // maxWidth: 500,
          margin: "2% auto", // Center align the content horizontally
          // padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Box className="DMSans">
          <Typography
            sx={{ display: "inline" }}
            variant={isSmScreen ? "h2" : "h4"}
          >
            {Lang.Team.Title1}
          </Typography>
          <Typography
            sx={{ display: "inline" }}
            variant={isSmScreen ? "h2" : "h4"}
            color="primary"
          >
            {Lang.Team.Title2}
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            width: "100%",
            alignItems: "top",
            mt: 7,
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
