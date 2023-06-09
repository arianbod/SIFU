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
      {/* <Container maxWidth="sm"> */}
      <Box sx={{ backgroundImage: `url(${Background})`, height: "30vh" }}>
        <img src={SliderPic} alt="Slider picture" />
      </Box>
      {/* </Container> */}
    </React.Fragment>
  );
}
