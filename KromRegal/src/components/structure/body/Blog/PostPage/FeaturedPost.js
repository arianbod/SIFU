import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import Photo from "../../../../../assets/LoremIpsum.webp";
export default function ActionAreaCard(props) {
    return (

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

            <img

                src={Photo}
                alt={props.Title}
            />
            <Typography variant="h5" component="div">
                {props.Title}
            </Typography>
        </Grid>

    );
}