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
const PostsData = [{ Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Featured Post", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Lorem IpsumLorem IpsumLorem Ipsum" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Featured Post", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Lorem IpsumLorem IpsumLorem Ipsum" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Featured Post", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Lorem IpsumLorem IpsumLorem Ipsum" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Featured Post", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "Lorem IpsumLorem IpsumLorem Ipsum" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Lorem Ipsum", PostImage: "", PostText: "post" }, { Title: "Featured Post", PostImage: "", PostText: "post" }];
const FeaturedPostData = PostsData[PostsData.length - 1]
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
                            mt: 7,
                        }}
                    >
                        <Grid item xs={12}>
                            <FeaturedPost Title={FeaturedPostData.Title} />
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
                                    mt: 7,
                                }}
                            >
                                {PostsData.map((Item, Index) =>
                                    <PostItem Title={Item.Title} PostText={Item.PostText} />
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
