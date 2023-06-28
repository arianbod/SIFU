import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Divider } from "@mui/material";
import Lang from "../../../lang/en.json";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AutoGrid() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div id="Roadmap" className="mt mb">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          margin: "auto", // Center align the content horizontally
          padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Box className="DMSans mb">
          <Typography
            sx={{ display: "inline", fontWeight: "bold" }}
            variant={isSmScreen ? "h2" : "h4"}
          >
            {Lang.Roadmap.Title1}
          </Typography>
          <Typography
            sx={{ display: "inline", fontWeight: "bold" }}
            variant={isSmScreen ? "h2" : "h4"}
            color="primary"
          >
            {Lang.Roadmap.Title2}
          </Typography>
        </Box>
        <Grid
          className="mt"
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
          alignContent="center"
          sx={{ display: isMdScreen ? "" : "none" }}
        >
          <Grid xs={12} md={5}>
            <Grid item xs={12} className="RoadMapSection">
              <Grid
                container
                spacing={2}
                alignContent="center"
                alignItems="center"
              >
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
          <Divider
            light
            orientation="vertical"
            flexItem
            sx={{ margin: "50px" }}
          />

          <Grid xs={12} md={5}>
            <Grid
              item
              xs={12}
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
            <Grid item xs={12} className="RoadMapSection">
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
    </div>
  );
}
