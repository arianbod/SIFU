import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Navigation from "../../general/Navigation";
import Footer from '../../general/8_Footer';
import PostItem from './PostItem';
import FeaturedPost from './FeaturedPost';
import Search from "./Search";
import { Link } from "react-router-dom";
import PostsData from './Data.json';
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

const FeaturedPostData = PostsData.PostsData[PostsData.PostsData.length - 1]
console.log(`hello ${FeaturedPostData.Title}`);
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
                <Box id="body">
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
                                <Search />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <FeaturedPost Title={FeaturedPostData.Title} PostText={FeaturedPostData.PostText} PostId={FeaturedPostData.id} PostSlug={FeaturedPostData.Slug} />
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
                                {PostsData.PostsData.map((Item) =>
                                    <Grid item xs={12} md={5} mx={isMdScreen ? 1 : 12} my={1}>
                                        <PostItem PostTitle={Item.Title} PostText={Item.PostText} PostId={Item.id} PostSlug={Item.Slug} />
                                    </Grid>
                                )
                                }
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
