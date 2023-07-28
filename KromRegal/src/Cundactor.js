import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Navigation from "./components/structure/general/Navigation.js";
import Slider from "./components/structure/body/Home/1_Slider";
import Introduction from "./components/structure/body/Home/2_Introduction";
import Tokenomics from "./components/structure/body/Home/3_Tokenomics";
import Roadmap from "./components/structure/body/Home/4_Roadmap";
import Team from "./components/structure/body/Home/5_Team";
import Connect from "./components/structure/body/Home/6_Connect";
import Outro from "./components/structure/body/Home/7_Outro";
import Footer from "./components/structure/general/8_Footer";
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
