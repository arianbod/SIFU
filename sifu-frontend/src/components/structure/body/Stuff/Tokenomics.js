import * as React from "react";
import Lang from "../../../../lang/en.json";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import TokenomicsItems from "./TokenomicsLists.js";
export default function SimpleContainer() {
  return (
    <Grid item>
      <List sx={{ width: "100%", maxWidth: 360 }} aria-label="contacts">
        {Lang.Tokenomics.Items.map((item, index) => (
          <TokenomicsItems key={index} Title={item.Title} Color={item.Color} />
        ))}
      </List>
    </Grid>
  );
}
