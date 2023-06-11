import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

const Roadmap = () => {
  const roadmapData = {
    Step1: {
      Title: "Phase 1",
      Description: "Foundation & Launch",
      Items: [
        "Establish the core team and advisors",
        "Establish social media presence",
        "Develop the Website & Whitepaper",
        "Pass Audit & KYC",
        "Finalize Private Sale & Public Sale",
        "Launch on Ethereum Blockchain",
      ],
    },
    Step2: {
      Title: "Phase 2",
      Description: "Listing & Marketing",
      Items: [
        "Listing on Decentralized & Centralized exchanges",
        "Launch staking program to incentivize token holders",
        "Huge Chinese & Global marketing campaigns",
        "Forge partnerships with other known projects",
      ],
    },
    Step3: {
      Title: "Phase 3",
      Description: "Long term growth",
      Items: ["Launch NFT Collection", "Develop more utilities"],
    },
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {roadmapData.Step2.Title}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {roadmapData.Step2.Description}
            </Typography>
            <ul>
              {roadmapData.Step2.Items.map((item, index) => (
                <Typography component="li" key={index}>
                  {item}
                </Typography>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Divider orientation="vertical" sx={{ height: "100%" }} />
      </Grid>
      <Grid item xs={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {roadmapData.Step1.Title}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {roadmapData.Step1.Description}
            </Typography>
            <ul>
              {roadmapData.Step1.Items.map((item, index) => (
                <Typography component="li" key={index}>
                  {item}
                </Typography>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h2">
              {roadmapData.Step3.Title}
            </Typography>
            <Typography variant="subtitle1" component="h3">
              {roadmapData.Step3.Description}
            </Typography>
            <ul>
              {roadmapData.Step3.Items.map((item, index) => (
                <Typography component="li" key={index}>
                  {item}
                </Typography>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Roadmap;
