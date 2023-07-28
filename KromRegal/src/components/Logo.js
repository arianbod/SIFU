import * as React from "react";
import { Typography, Box } from "@mui/material";
import Lang from "../lang/en.json";
import LogoImage from "../assets/Logo.png";
export default function ImageAvatars() {
  return (
    <Box sx={{ display: "flex" }}>
      <img
        alt={Lang.ProjectName}
        src={LogoImage}
        width={50}
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
