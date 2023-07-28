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
const PostsData = [
    {
        id: 1,
        Title: "Freedom of Speech Not Reach: New Updates and Progress",
        PostImage: "",
        PostText: "Post 1 Content",
    },
    {
        id: 2,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 2 Content",
    },
    {
        id: 3,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 3 Content",
    },
    // Add more test data objects with unique 'id'
    {
        id: 4,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 4 Content",
    },
    {
        id: 5,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 5 Content",
    },
    {
        id: 6,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 6 Content",
    },
    {
        id: 7,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 7 Content",
    },
    {
        id: 8,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 8 Content",
    },
    {
        id: 9,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 9 Content",
    },
    {
        id: 10,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 10 Content",
    },
    {
        id: 11,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 11 Content",
    },
    {
        id: 12,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 12 Content",
    },
    {
        id: 13,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 13 Content",
    },
    {
        id: 14,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 14 Content",
    },
    {
        id: 15,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 15 Content",
    },
    {
        id: 16,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 16 Content",
    },
    {
        id: 17,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 17 Content",
    },
    {
        id: 18,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 18 Content",
    },
    {
        id: 19,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 19 Content",
    },
    {
        id: 20,
        Title: "Lorem Ipsum",
        PostImage: "",
        PostText: "Post 20 Content",
    },
];
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
                                    mt: 4,
                                }}
                            >
                                {PostsData.map((Item) =>
                                    <Grid item xs={12} md={5} mx={isMdScreen ? 1 : 12} my={1}>
                                        <Link to={`/blog/${Item.id}`} underline="none">
                                            <PostItem Title={Item.Title} PostText={Item.PostText} />
                                        </Link>
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
