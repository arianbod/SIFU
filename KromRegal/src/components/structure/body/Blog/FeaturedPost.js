import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import Photo from "../../../../assets/LoremIpsum.webp";
import SubContent from './SubContent';
export default function ActionAreaCard(props) {
    return (
        <Link key={props.PostId} to={`/Blog/${props.PostId}/${props.PostSlug}`} style={{ textDecoration: "none" }}>
            <Grid
                container
                sx={{
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center ",
                    width: "90%", margin: "auto",
                    alignItems: "top",

                }}
            >

                <img
                    component="img"
                    src={Photo}
                    alt={props.Title}
                />
                <Typography gutterBottom variant="h5" component="div">
                    {props.Title}
                </Typography>
            </Grid >
        </Link >
    );
}