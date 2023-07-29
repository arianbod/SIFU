import React, { useState } from "react";
import ActionButton from "./ActionButton";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button, Fade
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
  return (
    <header className="App-header mb">


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
            className="PCMenu"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {Lang.Navigation.map((Item, Index) => (
              <Link key={Index}
                to={`/${Item.Url}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <MenuItem
                  sx={{ textTransform: "none!important" }}
                  onClick={handleCloseNavMenu}
                >


                  {Item.Title}


                </MenuItem>
              </Link>
            ))}

          </Box>

          <Box
            className="phoneMenu"
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
              {Lang.Navigation.map((page, Index) => (

                <MenuItem
                  sx={{ textTransform: "none!important" }}
                  key={Index}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    to={page.Url}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.Title}
                  </Link>
                </MenuItem>

              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ActionButton />
          </Box>
        </Toolbar>

      </AppBar>


    </header>
  );
}

export default ResponsiveAppBar;
