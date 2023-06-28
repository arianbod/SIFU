import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import BackgroundSlider from "./assets/slider_bg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Navigation from "./components/structure/header/Navigation.js";
import Slider from "./components/structure/body/1_Slider";
import Introduction from "./components/structure/body/2_Introduction";
import Tokenomics from "./components/structure/body/3_Tokenomics";
import Roadmap from "./components/structure/body/4_Roadmap";
import Team from "./components/structure/body/5_Team";
import Connect from "./components/structure/body/6_Connect";
import Outro from "./components/structure/body/7_Outro";
import Footer from "./components/structure/body/8_Footer";
import FooterBg from "./assets/Footer_bg.jpg";
import RoadmapBg from "./assets/Roadmap_bg.jpg";
import Fade from "@mui/material/Fade";
const darkTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#CE1620",
    },
    background: {
      default: "#14141A",
    },
  },
});

function App() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isxlScreen = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}
        <CssBaseline />
        <div className="App">
          {/* <Container maxWidth="xl"> */}
          <header className="App-header mb">
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
              <Navigation />
              <Fade in timeout={2000}>
                <div>
                  <Slider />
                </div>
              </Fade>
            </Box>
          </header>
          {/* <Box sx={{ height: "100vh" }} /> */}
          <Fade in timeout={6000}>
            <div className="mt">
              <Introduction />
            </div>
          </Fade>
          <div className="mt">
            <Tokenomics />
          </div>
          <div className="mt">
            <Box
              sx={{
                backgroundImage: `url(${RoadmapBg})`,
                backgroundSize: isMdScreen ? "100% 100%" : "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "20px",
              }}
            >
              <Roadmap />
            </Box>
          </div>
          <div className="mt">
            <Team />
          </div>
          <div className="mt">
            <Connect />
          </div>
          <div className="mt">
            <Box
              sx={{
                backgroundImage: `url(${FooterBg})`,
                backgroundSize: isMdScreen ? "100% 100%" : "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "10px",
              }}
            >
              <Outro />
              <Footer />
            </Box>
          </div>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* </Container> */}
        </div>
        {/* </Box> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
