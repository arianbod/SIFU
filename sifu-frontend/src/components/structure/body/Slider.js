import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Lang from "../../../lang/en.json";
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="sm"> */}
      <Box sx={{ bgcolor: "#fff", height: "30vh" }} />
      {/* </Container> */}
    </React.Fragment>
  );
}
