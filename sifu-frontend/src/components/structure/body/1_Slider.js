import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/slider_bg.png";
import SliderPic from "../../../assets/Slider_pic.png";
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Box
        sx={{
          paddingTop: isMdScreen ? "150px" : "100px",
          // backgroundColor: "#202024",
          backgroundImage: `url(${Background})`,
          backgroundSize: isMdScreen ? "contain" : "cover",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          height: "70vh", // Set the height to 100% of the viewport height
          alignItems: "top", // Center align the content vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            // maxWidth: 500,
            margin: "0 auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
          className="DMSans"
        >
          <Typography
            sx={{ color: "#777E90", fontWeight: "bold" }}
            variant="h6"
          >
            {Lang.Slider.Header}
          </Typography>
          {/* Add your paragraph here */}
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            {Lang.Slider.Text}
          </Typography>
          {/* Add your title here */}
          <Box sx={{ mt: isMdScreen ? "50px" : "10px" }}>
            <img src={SliderPic} alt={Lang.ProjectName} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
