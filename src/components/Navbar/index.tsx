import * as React from "react";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/logo.png";
import { useStyles } from "./styles";

export const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.box}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <img src={logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
