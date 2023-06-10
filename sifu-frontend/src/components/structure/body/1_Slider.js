import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/slider_bg.png";
import SliderPic from "../../../assets/Slider_pic.png";
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          paddingTop: "50px",
          backgroundColor: "#202024",
          backgroundImage: `url(${Background})`,
          backgroundSize: "contain",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          height: "80vh", // Set the height to 100% of the viewport height
          alignItems: "top", // Center align the content vertically
        }}
      >
        <Box
          sx={{
            marginTop: "1000px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            // maxWidth: 500,
            margin: "0 auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <Typography sx={{ color: "#777E90" }}>
            {Lang.Slider.Header}
          </Typography>
          {/* Add your paragraph here */}
          <Typography variant="h3">{Lang.Slider.Text}</Typography>
          {/* Add your title here */}
          <Box sx={{ mt: 2 }}>
            <img src={SliderPic} alt="Slider" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
