import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Button } from "@mui/material";
import Lang from "../../../lang/en.json";
import ActionButton from "../header/ActionButton";
import Photo from "../../../assets/Outro_pic.png";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function AutoGrid() {
  return (
    <div id="Outro">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // maxWidth: 500,
          margin: "12.5% auto", // Center align the content horizontally
          padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Grid container spacing={3}>
          <Grid xs={12} md>
            {/* <Item> */}
            <img src={Photo} alt={Lang.Outro.Title2} />
            {/* </Item> */}
          </Grid>
          <Grid xs={12} md>
            {/* <Item> */}
            <Box
              sx={{
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center ",
                width: "100%",
                // height: "50vh", // Set the height to 100% of the viewport height
                alignItems: "top", // Center align the content vertically
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  textAlign: "left",
                  maxWidth: 600,
                  margin: "12.5% auto", // Center align the content horizontally
                  padding: "0 16px", // Add some horizontal padding
                }}
              >
                <Box className="DMSans">
                  <Typography
                    sx={{ display: "inline", fontWeight: "bold" }}
                    variant="h2"
                  >
                    {Lang.Outro.Title1} &nbsp;
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontWeight: "bold" }}
                    variant="h2"
                    color="primary"
                  >
                    {Lang.Outro.Title2}
                  </Typography>
                </Box>
                {/* Add your title here */}
                <p>{Lang.Outro.Paragpraph}</p> {/* Add your paragraph here */}
                <Box sx={{ mt: 2 }}>
                  {/* <SocialButtons /> */}
                  {/* <Button
              variant="contained"
              sx={{
                borderRadius: "100px",
                fontSize: "10px",
                padding: "10px 30px",
                fontWeight: "bold",
                textShadow: "1px 1px black",
              }}
            >
              {Lang.Introduction.Button}
            </Button> */}
                </Box>
                <ActionButton />
              </Box>
            </Box>
            {/* </Item> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
