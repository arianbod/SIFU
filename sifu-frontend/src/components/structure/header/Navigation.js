import React, { useState } from "react";
import ActionButton from "./ActionButton";
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
// import { Menu as MenuIcon } from "@mui/icons-material";
import MenuIcon from "../../../assets/Burger.svg";
import { BrowserRouter, Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import Container from "@mui/material/Container";
import Logo from "../../Logo";
import Lang from "../../../lang/en.json";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { Navigation } = Lang;

  const pages = Object.entries(Navigation).map(([key, value]) => ({
    name: value,
    url: `#${key}`,
  }));

  return (
    <AppBar
      position="relative"
      style={{
        maxWidth: "1350px",
        textAlign: "center",
        margin: "auto",
        boxShadow: "none",
      }}
      color="transparent"
    >
      {/* <Container maxWidth="md" sx={{ backgroundColor: "#202024" }}> */}
      <Toolbar disableGutters>
        {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
        <Logo />

        {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
        {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              // fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {Lang.ProjectName}
          </Typography> */}
        <Box
          ClassName="phoneMenu"
          sx={{
            flexGrow: 1,
            display: {
              xs: "flex",
              md: "none",
              textAlign: "center",
              justifyContent: "flex-end",
            },
          }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <img src={MenuIcon} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none", textAlign: "center" },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                sx={{ textTransform: "none!important" }}
                key={page.name}
                onClick={handleCloseNavMenu}
              >
                <Link
                  href={page.url}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box
          ClassName="PCMenu"
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "center" },
          }}
        >
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.url}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#C0BFD0",
                display: "block",
                textTransform: "none",
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ActionButton />
        </Box>
      </Toolbar>
      {/* </Container> */}
    </AppBar>
  );
}

export default ResponsiveAppBar;
