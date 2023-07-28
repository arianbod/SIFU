import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { CardActionArea } from '@mui/material';
import Photo from "../../../../assets/LoremIpsum.webp"
export default function ActionAreaCard(props) {
    return (

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
                        {props.Title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.PostText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    );
}