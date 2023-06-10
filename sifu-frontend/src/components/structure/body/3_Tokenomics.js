import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/slider_bg.png";
import TokenomicsPic from "../../../assets/Tokenomics_pic.svg";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          // backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          height: "100vh", // Set the height to 100% of the viewport height
          alignItems: "top", // Center align the content vertically
        }}
        id="Tokenomics"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "flex-start",
            textAlign: "center",
            maxWidth: 500,
            margin: "0 auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <Typography sx={{ display: "inline" }} variant="h2">
            {Lang.Tokenomics.Title2}
          </Typography>
          <Typography sx={{ display: "inline" }} variant="h2" color="primary">
            {Lang.Tokenomics.Title1}
          </Typography>
          <Typography sx={{ display: "block" }} variant="h2" color="primary">
            {Lang.Tokenomics.Text}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <img src={TokenomicsPic} alt="Slider" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
