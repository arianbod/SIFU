import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Button } from "@mui/material";
import Lang from "../../../lang/en.json";
import ActionButton from "../header/ActionButton";
import Photo from "../../../assets/Outro_pic.png";
import Background from "../../../assets/slider_bg.png";
import TokenomicsPic from "../../../assets/Tokenomics_pic.svg";
import TokenomicStuff from "./Stuff/Tokenomics";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md>
          {/* <Item> */}
          <img src={TokenomicsPic} alt={Lang.Tokenomics.Title2} />
          {/* </Item> */}
        </Grid>
        <Grid xs={12} md>
          <TokenomicStuff />
        </Grid>
      </Grid>
    </Box>
  );
}
