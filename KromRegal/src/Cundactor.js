import React from "react";

import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

function Cundoctor() {
    const theme = useTheme();
    const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
    const isxlScreen = useMediaQuery(theme.breakpoints.up("xl"));
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Navigation />
                <Slider />
                <Introduction />
                <Tokenomics />
                <Roadmap />
                <Team />
                <Connect />
                <Outro />
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Cundoctor;
