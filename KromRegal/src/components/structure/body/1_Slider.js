import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lang from "../../../lang/en.json";
import SliderPic from "../../../assets/Slider_pic.png";
import { Typography } from "@mui/material";
import BackgroundSlider from "../../../assets/kromsec-kromsecurity.gif";
export default function SimpleContainer() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isxlScreen = useMediaQuery(theme.breakpoints.up("xl"));
  const issmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        // backgroundColor: "#202024",
        backgroundImage: `url(${BackgroundSlider})`,
        backgroundSize: isxlScreen ? "contain" : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center ",
        width: "100%",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <Fade in timeout={4000}>
        <div>


          <div id="Home">
            <Container maxWidth="xl">
              <CssBaseline />

              <Box
                sx={{
                  paddingTop: isMdScreen ? "80px" : "50px",
                  paddingBottom: isMdScreen ? "80px" : "50px",
                  backgroundSize: isMdScreen ? "contain" : "cover",
                  display: "flex",
                  justifyContent: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center ",
                  width: "100%",

                  alignItems: "top",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",

                    margin: "0 auto",
                    padding: "0", overflow: "hidden"
                  }}
                  className="DMSans"
                >
                  <Box sx={{ opacity: "0.5", mt: "-150px" }}>
                    <img src={SliderPic} alt={Lang.ProjectName} />
                  </Box>
                  <Typography
                    sx={{ color: "#777E90", fontWeight: "bold" }}
                    variant={issmScreen ? "h5" : "caption"}
                  >
                    {Lang.Slider.Header}
                  </Typography>

                  <Typography
                    variant={issmScreen ? "h2" : "h4"}
                    sx={{ fontWeight: "bold" }}
                  >
                    {Lang.Slider.Text}
                  </Typography>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </Fade>
    </Box>
  );
}
