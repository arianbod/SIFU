import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material/";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Lang from "../../../lang/en.json";
import Logo from "../../Logo";
import Background from "../../../assets/Roadmap_bg.png";
import FooterSections from "./Stuff/FooterSections";
export default function AutoGrid() {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Grid xs={12} md>
        <Logo />
        <FooterSections />
      </Grid>
    </Grid>
  );
}
