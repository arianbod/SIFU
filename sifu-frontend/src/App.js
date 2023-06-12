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
// import "./fonts/poppins.css";

import Navigation from "./components/structure/header/Navigation.js";
import Slider from "./components/structure/body/1_Slider";
import Introduction from "./components/structure/body/2_Introduction";
import Tokenomics from "./components/structure/body/3_Tokenomics";
import Roadmap from "./components/structure/body/4_Roadmap";
import Team from "./components/structure/body/5_Team";
import Connect from "./components/structure/body/6_Connect";
import Outro from "./components/structure/body/7_Outro";
import Footer from "./components/structure/body/8_Footer";
import FooterBg from "./assets/Footer_bg.png";
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
          <header className="App-header">
            <Box
              sx={{
                // backgroundColor: "#202024",
                backgroundImage: `url(${BackgroundSlider})`,
                backgroundSize: isMdScreen ? "contain" : "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center ",
                width: "100%",
              }}
            >
              <Navigation />
              <Slider />
            </Box>
          </header>
          {/* <Box sx={{ height: "100vh" }} /> */}

          <Introduction />
          <Tokenomics />
          <Roadmap />
          <Team />
          <Connect />
          <Box
            sx={{
              backgroundImage: `url(${FooterBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "20px",
            }}
          >
            <Outro />
            <Footer />
          </Box>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* </Container> */}
        </div>
        {/* </Box> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
