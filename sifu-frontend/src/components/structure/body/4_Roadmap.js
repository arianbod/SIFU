import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Button, Divider } from "@mui/material";
import Lang from "../../../lang/en.json";
import ActionButton from "../header/ActionButton";
import Photo from "../../../assets/Outro_pic.png";
import Background from "../../../assets/slider_bg.png";
import TokenomicsPic from "../../../assets/Tokenomics_pic.svg";
import TokenomicStuff from "./Stuff/Tokenomics";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AutoGrid() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        alignItems="center"
        sx={{ display: isMdScreen ? "none" : "" }}
      >
        <Grid item xs={12} maxWidth={400} className="RoadMapSection">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                {Lang.Roadmap.Step1.Title}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                {Lang.Roadmap.Step1.Description}
              </Typography>
              <ul>
                {Lang.Roadmap.Step1.Items.map((item, index) => (
                  <Typography
                    component="li"
                    key={index}
                    className="keypoint-circle"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} maxWidth={400} className="RoadMapSection">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                {Lang.Roadmap.Step2.Title}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                {Lang.Roadmap.Step2.Description}
              </Typography>
              <ul>
                {Lang.Roadmap.Step2.Items.map((item, index) => (
                  <Typography
                    component="li"
                    key={index}
                    className="keypoint-circle"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} maxWidth={400} className="RoadMapSection">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" component="h2">
                {Lang.Roadmap.Step3.Title}
              </Typography>
              <Typography variant="subtitle1" component="h3">
                {Lang.Roadmap.Step3.Description}
              </Typography>
              <ul>
                {Lang.Roadmap.Step3.Items.map((item, index) => (
                  <Typography
                    component="li"
                    key={index}
                    className="keypoint-circle"
                  >
                    {item}
                  </Typography>
                ))}
              </ul>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        sx={{ display: isMdScreen ? "" : "none" }}
      >
        <Grid xs={12} md>
          <Grid item xs={12} maxWidth={400} className="RoadMapSection">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                  {Lang.Roadmap.Step2.Title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                  {Lang.Roadmap.Step2.Description}
                </Typography>
                <ul>
                  {Lang.Roadmap.Step2.Items.map((item, index) => (
                    <Typography
                      component="li"
                      key={index}
                      className="keypoint-circle"
                    >
                      {item}
                    </Typography>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />

        <Grid xs={12} md>
          <Grid
            item
            xs={12}
            maxWidth={400}
            className="RoadMapSection"
            style={{ marginBottom: "200px" }}
          >
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                  {Lang.Roadmap.Step1.Title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                  {Lang.Roadmap.Step1.Description}
                </Typography>
                <ul>
                  {Lang.Roadmap.Step1.Items.map((item, index) => (
                    <Typography
                      component="li"
                      key={index}
                      className="keypoint-circle"
                    >
                      {item}
                    </Typography>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} maxWidth={400} className="RoadMapSection">
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                  {Lang.Roadmap.Step3.Title}
                </Typography>
                <Typography variant="subtitle1" component="h3">
                  {Lang.Roadmap.Step3.Description}
                </Typography>
                <ul>
                  {Lang.Roadmap.Step3.Items.map((item, index) => (
                    <Typography
                      component="li"
                      key={index}
                      className="keypoint-circle"
                    >
                      {item}
                    </Typography>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
