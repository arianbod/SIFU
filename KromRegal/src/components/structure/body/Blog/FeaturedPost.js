import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";
import Photo from "../../../../assets/LoremIpsum.webp";
export default function ActionAreaCard(props) {
    return (
        <Link key={props.PostId} to={`/Blog/${props.PostId}/${props.PostSlug}`} underline="none">
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
                <Card sx={{ width: "100%", height: "50vh" }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="500"
                            image={Photo}
                            alt={props.Title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {props.Title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {props.PostText}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Link>
    );
}