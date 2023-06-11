import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
import Background from "../../../assets/cloud.png";
import { Lan } from "@mui/icons-material";
import { Typography, Button } from "@mui/material";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "contain",
          display: "flex",
          justifyContent: "center",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center ",
          width: "100%",
          height: "50vh", // Set the height to 100% of the viewport height
          alignItems: "top", // Center align the content vertically
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: 500,
            margin: "12.5% auto", // Center align the content horizontally
            padding: "0 16px", // Add some horizontal padding
          }}
        >
          <Box className="DMSans">
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant="h2"
            >
              {Lang.Introduction.Title1}
            </Typography>
            <Typography
              sx={{ display: "inline", fontWeight: "bold" }}
              variant="h2"
              color="primary"
            >
              {Lang.Introduction.Title2}
            </Typography>
          </Box>
          {/* Add your title here */}
          <p>{Lang.Introduction.Paragpraph}</p> {/* Add your paragraph here */}
          <Box sx={{ mt: 2 }}>
            {" "}
            <Button
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
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
