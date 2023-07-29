import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Lang from "../../../../lang/en.json";
import ActionButton from "../../general/ActionButton";
import Photo from "../../../../assets/Logo.png";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Outro() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div id="Outro">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // maxWidth: 500,
          width: "100%",
          justifyContent: "center",
          margin: "auto", // Center align the content horizontally
          // padding: "0 16px", // Add some horizontal padding
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} md sx={{ textAlign: "center" }}>
            {/* <Item> */}
            <img src={Photo} alt={Lang.Outro.Title2} style={{ maxWidth: 400 }} />
            {/* </Item> */}
          </Grid>
          <Grid xs={12} md>
            {/* <Item> */}
            <Box
              sx={{
                paddingTop: "70px",
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
                  margin: "auto", // Center align the content horizontally
                  // padding: "0 16px", // Add some horizontal padding
                }}
              >
                <Box className="DMSans">
                  <Typography
                    sx={{ display: "inline", fontWeight: "bold" }}
                    variant={isSmScreen ? "h2" : "h4"}
                  >
                    {Lang.Outro.Title1}
                  </Typography>
                  <Typography
                    sx={{ display: "inline", fontWeight: "bold" }}
                    variant={isSmScreen ? "h2" : "h4"}
                    color="primary"
                  >
                    {Lang.Outro.Title2}
                  </Typography>
                </Box>
                {/* Add your title here */}
                <p>{Lang.Outro.Paragpraph}</p> {/* Add your paragraph here */}
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
