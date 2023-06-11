import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material/";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Lang from "../../../lang/en.json";
import Logo from "../../Logo";
// import Lang from "../../../lang/en.json";
export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md>
          <Grid container spacing={3}>
            <Grid xs={12} md={12}>
              <Logo />
            </Grid>
            <Grid xs={12} md={12}>
              <Typography>{Lang.Footer.Section1.Links[0].Title}</Typography>
            </Grid>{" "}
            <Grid xs={12} md={12}>
              <Typography>{Lang.Footer.Section1.Links[1].Title}</Typography>
            </Grid>{" "}
            <Grid xs={12} md={12}>
              <Typography>{Lang.Footer.Section1.Links[2].Title}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} md></Grid>
        <Grid xs={12} md></Grid>
        <Grid xs={12} md></Grid>
      </Grid>
    </Box>
  );
}
