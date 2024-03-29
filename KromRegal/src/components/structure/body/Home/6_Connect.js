import * as React from "react";

import Box from "@mui/material/Box";

import Lang from "../../../../lang/en.json";
import Background from "../../../../assets/cloud.png";
import { Typography, useTheme, useMediaQuery } from "@mui/material";
import SocialButtons from "./Stuff/Connect";
export default function SimpleContainer() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="Connect">
      <Box
        sx={{
          // backgroundImage: `url(${Background})`,
          backgroundSize: "contain",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          alignItems: "center", // Center align the content vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 500,
            margin: "2% auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <Box className="DMSans">
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={isSmScreen ? "h2" : "h4"}
            >
              {Lang.Connect.Title1}
            </Typography>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={isSmScreen ? "h2" : "h4"}
              color="primary"
            >
              {Lang.Connect.Title2}
            </Typography>
          </Box>
          {/* Add your title here */}
          <p>{Lang.Connect.Paragpraph}</p> {/* Add your paragraph here */}
          <Box sx={{ mt: 2 }}>
            <SocialButtons />
            {/* <Button
              variant="contained"
              sx={{
                borderRadius: "100px",
                fontSize: "10px",
                padding: "10px 30px",
                fontWeight: "bold",
                textShadow: "1px 1px black",
              }}
            >
              {Lang.Introduction.Button}
            </Button> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
