import React, { PureComponent } from 'react';
import { Typography, Button } from '@mui/material';
import AuthorPhoto from "../../../../assets/Author.png"
import EventIcon from '@mui/icons-material/Event';
export default function SubContent(props) {

    return (
        <>
            <Button variant="Text" sx={{ textTransform: "none" }} startIcon={<img src={AuthorPhoto} width={20} alt={props.Author} />}>
                {props.Author}
            </Button>
            <Button variant="Text" startIcon={<EventIcon />}>
                {props.PublishDate}
            </Button>

        </>
    )
}