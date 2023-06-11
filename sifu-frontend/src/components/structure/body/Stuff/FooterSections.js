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
        {Lang.Footer.sections.map((section, sectionIndex) => (
          <React.Fragment key={sectionIndex}>
            <Typography variant="h6">{section.Title}</Typography>
            <List>
              {section.Links.map((link, linkIndex) => (
                <ListItem key={linkIndex}>
                  <ListItemText>
                    <a href={link.Url} style={{ color: link.Color }}>
                      {link.Title}
                    </a>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </React.Fragment>
        ))}
      </List>
    </Grid>
  );
}
