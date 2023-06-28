import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Lang from "../../../lang/en.json";
import Background from "../../../assets/cloud.png";

import { Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function SimpleContainer() {
  const theme = useTheme();

  const issmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="About">
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: issmScreen ? "contain" : "cover",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",

          alignItems: "top", // Center align the content vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 500,
            margin: "2.5% auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <Box className="DMSans mb">
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={issmScreen ? "h2" : "h4"}
            >
              {Lang.Introduction.Title1}
            </Typography>
            <Typography
              sx={{
                display: "inline",
                fontWeight: "bold",
              }}
              variant={issmScreen ? "h2" : "h4"}
              color="primary"
            >
              {Lang.Introduction.Title2}
            </Typography>
          </Box>
          {/* Add your title here */}
          <Typography variant={issmScreen ? "body" : "body2"}>
            {Lang.Introduction.Paragpraph}
          </Typography>{" "}
          {/* Add your paragraph here */}
          <Box sx={{ mt: 2 }}>
            {" "}
            <Button
              variant="contained"
              sx={{
                borderRadius: "100px",
                fontSize: "10px",
                padding: "10px 30px",
                fontWeight: "bold",
                // textShadow: "1px 1px black",
              }}
            >
              {Lang.Introduction.Button}
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
