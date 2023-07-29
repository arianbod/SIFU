import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Lang from "../../../../lang/en.json";
import TokenomicsPic from "../../../../assets/Tokenomics_pic.svg";
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

export default function Tokenomics() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="Tokenomics" className="mb">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          // maxWidth: 500,
          margin: "auto", // Center align the content horizontally
          padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Box className="DMSans mb">
          <Box>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={isSmScreen ? "h2" : "h4"}
            >
              {Lang.Tokenomics.Title1}
            </Typography>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={isSmScreen ? "h2" : "h4"}
              color="primary"
            >
              {Lang.Tokenomics.Title2}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant={isSmScreen ? "body" : "body2"}
            >
              {Lang.Tokenomics.Text}
            </Typography>
          </Box>
        </Box>
        <Grid container alignItems="center" spacing={12}>
          <Grid xs={12} md style={{ textAlign: "center" }} className="mt">
            {/* <Item> */}
            <img
              src={TokenomicsPic}
              alt={Lang.Tokenomics.Title2}
              style={{
                width: isMdScreen ? "700px" : "80%",
                // marginTop: isMdScreen ? "-50px" : "",
              }}
            />
            {/* </Item> */}
          </Grid>
          <Grid xs={12} md className="mt">
            <TokenomicStuff />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
