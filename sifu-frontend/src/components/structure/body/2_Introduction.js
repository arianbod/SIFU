import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/slider_bg.png";
import SliderPic from "../../../assets/Slider_pic.png";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          height: "100vh", // Set the height to 100% of the viewport height
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
            margin: "0 auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <p>{Lang.Slider.Header}</p> {/* Add your paragraph here */}
          <h1>Introduction</h1> {/* Add your title here */}
          <Box sx={{ mt: 2 }}>
            <img src={SliderPic} alt="Slider" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
