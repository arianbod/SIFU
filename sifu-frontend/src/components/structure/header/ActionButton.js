import React, { useState } from "react";
import {
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
import { Menu as MenuIcon } from "@mui/icons-material";
import { BrowserRouter, Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Logo from "../../Logo";
import Lang from "../../../lang/en.json";

function ActionButton() {
  return (
    <Box sx={{ flexGrow: 0 }}>
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
        {Lang.Contact}
      </Button>
    </Box>
  );
}

export default ActionButton;
