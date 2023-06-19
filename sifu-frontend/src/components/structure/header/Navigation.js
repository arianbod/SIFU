import React, { useState } from "react";
import ActionButton from "./ActionButton";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
// import { Menu as MenuIcon } from "@mui/icons-material";
import MenuIcon from "../../../assets/Burger.svg";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import Lang from "../../../lang/en.json";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
        maxWidth: "1100px",
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
              <AnchorLink
                href={page.url}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
              </AnchorLink>
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
            <AnchorLink
              href={page.url}
              style={{ textDecoration: "none", color: "inherit" }}
            >
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
            </AnchorLink>
          ))}
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <ActionButton />
        </Box>
      </Toolbar>

    </AppBar>
  );
}

export default ResponsiveAppBar;
