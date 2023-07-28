import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "../../header/Navigation";
import Footer from '../../body/8_Footer';

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
                {/* <Container maxWidth="xl"> */}
                <header className="App-header mb">
                    <Navigation />
                </header>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default Cundoctor;
