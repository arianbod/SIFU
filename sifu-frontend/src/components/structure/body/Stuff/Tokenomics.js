import * as React from "react";
import Lang from "../../../../lang/en.json";

import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
export default function SimpleContainer() {
  return (
    <>
      <Grid item>
        <Typography>{Lang.Tokenomics.Text1}</Typography>
        <Typography>{Lang.Tokenomics.Text2}</Typography>
        <Typography>{Lang.Tokenomics.Text3}</Typography>
        <Typography>{Lang.Tokenomics.Text4}</Typography>
        <Typography>{Lang.Tokenomics.Text5}</Typography>
        <Typography>{Lang.Tokenomics.Text6}</Typography>
      </Grid>
    </>
  );
}
