import * as React from "react";
import { Box, Typography, List, Container } from "@mui/material/";
import Grid from "@mui/material/Unstable_Grid2";
import Lang from "../../../lang/en.json";
import Logo from "../../Logo";
import FooterSectionItems from "./Stuff/FooterSectionItems";
export default function AutoGrid() {
  return (
    <div id="Staking">
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 3,
            justifyContent: "center",
            // backgroundImage: `url(${Background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container spacing={1} display="flex">
            <Grid item xs={12} md>
              <Logo />
              <Box sx={{ mt: "20px" }}>
                <Typography variant="h5">
                  {Lang.Footer.LogoSection.Links[0].Title}
                </Typography>
                <Typography variant="h5">
                  {Lang.Footer.LogoSection.Links[1].Title}
                </Typography>
                <Typography variant="h5">
                  {Lang.Footer.LogoSection.Links[2].Title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md>
              <Typography variant="h6">{Lang.Footer.Section1.Title}</Typography>
              <List>
                {Lang.Footer.Section1.Links.map((item, Index) => (
                  <FooterSectionItems Title={item.Title} Url={item.Url} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md>
              <Typography variant="h6">{Lang.Footer.Section2.Title}</Typography>
              <List>
                {Lang.Footer.Section2.Links.map((item, Index) => (
                  <FooterSectionItems Title={item.Title} Url={item.Url} />
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md>
              <Typography variant="h6">{Lang.Footer.Section3.Title}</Typography>
              <List>
                {Lang.Footer.Section3.Links.map((item, Index) => (
                  <FooterSectionItems Title={item.Title} Url={item.Url} />
                ))}
              </List>
            </Grid>
          </Grid>
          <hr />
          <Grid container display="flex">
            <Grid
              item
              xs={12}
              md
              style={{ marginTop: "10px", marginBottom: "80px" }}
            >
              <Typography className="GreyText" variant="caption">
                {Lang.Footer.Rights}
              </Typography>
            </Grid>
            {/* <Grid item xs={12} md>
          <Box variant="h5" sx={{ textAlign: "right" }}>
            {Lang.Footer.LogoSection.Links[0].Title}
          </Box>
        </Grid> */}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
