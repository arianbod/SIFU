import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
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
const darkTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#CE1620",
    },
  },
});
function App() {
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
          <Container maxWidth="xl">
            <header className="App-header">
              <Navigation />
              {/* <Box sx={{ height: "100vh" }} /> */}

              <Slider />
              <Introduction />
              <Tokenomics />
              <Roadmap />
              <Team />
              <Connect />
              <Outro />
              <Footer />
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>
          </Container>
        </div>
        {/* </Box> */}
      </ThemeProvider>
    </Router>
  );
}

export default App;
