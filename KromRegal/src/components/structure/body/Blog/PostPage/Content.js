import React, { PureComponent } from 'react';
import { Typography } from '@mui/material';

export default function Content(props) {

    return (
        <>
            <Typography variant="body1" textAlign="justify">
                {props.Text}
            </Typography>
        </>
    )
}