import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
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