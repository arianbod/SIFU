import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lang from "../../../lang/en.json";
import SliderPic from "../../../assets/Slider_pic.png";
import { Typography } from "@mui/material";

export default function SimpleContainer() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const issmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="Home">
      <Container maxWidth="xl">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: isMdScreen ? "150px" : "100px",
            backgroundSize: isMdScreen ? "contain" : "cover",
            display: "flex",
            justifyContent: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            width: "100%",

            alignItems: "top",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",

              margin: "0 auto",
              padding: "0 16px",
            }}
            className="DMSans"
          >
            <Typography
              sx={{ color: "#777E90", fontWeight: "bold" }}
              variant={issmScreen ? "h5" : "caption"}
            >
              {Lang.Slider.Header}
            </Typography>

            <Typography
              variant={issmScreen ? "h2" : "h4"}
              sx={{ fontWeight: "bold" }}
            >
              {Lang.Slider.Text}
            </Typography>
            <Box sx={{ mt: isMdScreen ? "50px" : "10px" }}>
              <img src={SliderPic} alt={Lang.ProjectName} />
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
