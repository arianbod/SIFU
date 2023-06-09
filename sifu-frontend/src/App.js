import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "./components/structure/header/Navigation.js";
import Slider from "./components/structure/body/Slider.js";
const darkTheme = createTheme({
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
        <CssBaseline />
        <div className="App">
          <Container maxWidth="xl">
            <header className="App-header">
              <Navigation />
              {/* <Box sx={{ height: "100vh" }} /> */}

              <Slider />
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
            </header>
          </Container>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
