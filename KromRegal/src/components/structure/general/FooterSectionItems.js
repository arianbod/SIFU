import * as React from "react";
import Lang from "../../../lang/en.json";

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
import { Link, useParams } from "react-router-dom";
export default function FooterSectionItems({ Title, Url, id }) {
  return (
    <ListItem style={{ paddingLeft: " 0px" }}>
      <ListItemText>
        <Typography variant="caption">
          <Link key={id} to={Url} className="GreyText">
            {Title}
          </Link>
        </Typography>
      </ListItemText>
    </ListItem>
  );
}
