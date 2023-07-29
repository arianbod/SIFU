import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';
import Photo from "../../../../assets/LoremIpsum.webp"
export default function ActionAreaCard(props) {
    return (
        <Link key={props.PostId} to={`/Blog/${props.PostId}/${props.PostSlug}`} underline="none">
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={Photo}
                        alt={props.Title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.PostTitle}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {props.PostText}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link >
    );
}