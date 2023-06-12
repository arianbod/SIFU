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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        // maxWidth: 500,
        margin: "12.5% auto", // Center align the content horizontally
        padding: "0 16px", // Add some horizontal padding
      }}
    >
      <Box className="DMSans">
        <Typography sx={{ display: "inline", fontWeight: "bold" }} variant="h2">
          {Lang.Tokenomics.Title1}
        </Typography>
        <Typography
          sx={{ display: "inline", fontWeight: "bold" }}
          variant="h2"
          color="primary"
        >
          {Lang.Tokenomics.Title2}
        </Typography>
      </Box>
      <Grid container alignItems="center" spacing={12}>
        <Grid xs={12} md style={{ textAlign: "center" }}>
          {/* <Item> */}
          <img
            src={TokenomicsPic}
            alt={Lang.Tokenomics.Title2}
            style={{ width: isMdScreen ? "600px" : "80%" }}
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
