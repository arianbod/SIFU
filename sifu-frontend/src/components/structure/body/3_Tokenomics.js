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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container alignItems="center">
        <Grid xs={12} md style={{ textAlign: "center" }}>
          {/* <Item> */}
          <img
            src={TokenomicsPic}
            alt={Lang.Tokenomics.Title2}
            style={{ maxWidth: isMdScreen ? "50%" : "80%" }}
          />
          {/* </Item> */}
        </Grid>
        <Grid xs={12} md>
          <TokenomicStuff />
        </Grid>
      </Grid>
    </Box>
  );
}
