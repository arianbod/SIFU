import * as React from "react";
import Lang from "../../../../lang/en.json";

import {
  Grid,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Avatar,
  Button,
  Tooltip,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
export default function TokenomicsItems({ Title, Color, Url }) {
  console.log(Title, Color);
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {/* <Box
            sx={{
              bgcolor: Color,
              width: "20px",
              height: "20px",
              borderRadius: "100px",
            }}
          /> */}
        </ListItemIcon>
        <a href={Url}>
          <ListItemText primary={Title} />
        </a>
      </ListItemButton>
    </ListItem>
  );
}
