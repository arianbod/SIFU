import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "../../../general/Navigation";
import Footer from '../../../general/8_Footer';
import PostItem from '../PostItem';
import FeaturedPost from './FeaturedPost';
import Search from "../Search";
import { Link, useParams } from "react-router-dom";
import PostsData from '../Data.json';
import Content from "./Content";
import SubContent from "../SubContent";
import Breadcrumbs from "../Breadcrumbs"
import { Typography } from "@mui/material";
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
    const { id, Slug } = useParams();
    const PostData = PostsData.PostsData.find(
        (post) => post.id.toString() === id
    );
    return (
        <>
            <ThemeProvider theme={darkTheme}>

                <CssBaseline />
                {/* <Container maxWidth="xl"> */}
                <header className="App-header mb">
                    <Navigation />
                    <Search />
                </header>
                <Box id="body">
                    <Grid
                        container
                        sx={{
                            backgroundSize: "cover",
                            display: "flex",
                            justifyContent: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center ",
                            width: "50%", margin: "auto",
                            alignItems: "top",

                        }}
                    >
                        <Grid item xs={12}>
                            <Grid
                                container
                                sx={{
                                    backgroundSize: "cover",
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center ",
                                    width: "100%",
                                    alignItems: "top",
                                }}
                            >

                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Breadcrumbs />
                        </Grid>
                        <Grid item xs={12}>
                            <FeaturedPost Title={PostData.Title} />
                        </Grid>
                        <Grid item xs={12}>
                            <SubContent Author={PostData.Author} PublishDate={PostData.PublishDate} />
                        </Grid>

                        <Grid item xs={12}>



                            <Grid
                                container
                                sx={{
                                    backgroundSize: "cover",
                                    display: "flex",
                                    justifyContent: "center",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center ",
                                    width: "100%",
                                    alignItems: "top",
                                    mt: 4,
                                }}
                            >
                                <Content Text={PostData.Text} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Footer />
            </ThemeProvider >
        </>
    );
}

export default Cundoctor;
