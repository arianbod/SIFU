import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Lang from "../lang/en.json";
import LogoImage from "../assets/Logo.svg";
export default function ImageAvatars() {
  return (
    // <Stack direction="row" spacing={2}>
    //   <Avatar
    //     alt="Remy Sharp"
    //     src="/static/images/avatar/1.jpg"
    //     sx={{ width: 24, height: 24 }}
    //   />
    //   <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    // </Stack>
    <>
      <img
        alt={Lang.ProjectName}
        src={LogoImage}
        // sx={{ width: 56, height: 56 }}
      />
      {/* <img src="../assets/Logo.svg" /> */}
    </>
  );
}
