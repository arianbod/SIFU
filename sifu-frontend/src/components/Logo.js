import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Box } from "@mui/material";
import Lang from "../lang/en.json";
import LogoImage from "../assets/Logo.svg";
export default function ImageAvatars() {
  return (
    <Box sx={{ display: "flex" }}>
      <img
        alt={Lang.ProjectName}
        src={LogoImage}
        // sx={{ width: 56, height: 56 }}
      />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          paddingLeft: "16px",
          paddingRight: "-16px",
          display: "flex",
          // fontFamily: "monospace",
          fontWeight: 700,
          // letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          justifyContent: "top",
          marginTop: "5px",
        }}
      >
        {Lang.ProjectName}
      </Typography>
    </Box>
  );
}
