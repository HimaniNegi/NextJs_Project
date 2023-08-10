"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import Image from "next/image";
import Logo from "../../public/images/metaLogo.svg";
import SmallLogo from "../../public/images/metaShortIcon.svg";
import TerminalIcon from "@mui/icons-material/Terminal";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import PriceChangeOutlinedIcon from "@mui/icons-material/PriceChangeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { usePathname } from "next/navigation";
import ".//myStyle.css";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import UserProfile from "./userProfile";
import Notifications from "./notifications";
import AppContext from "../appContext";

const drawerWidth = 195;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const pathname = usePathname();
  const [active, setActive] = useState("/dashboard");
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [showMe, setShowMe] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
    setShowMe(!showMe);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setShowMe(!showMe);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 600) {
        // Adjust the breakpoint as needed
        handleDrawerClose();
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const menuItems = [
    {
      text: "Dashboard",
      icon: <GridViewIcon />,
      Path: "/dashboard",
    },
    {
      text: "Programs",
      icon: <TerminalIcon />,
      Path: "/program",
    },
    {
      text: "Students",
      icon: <PeopleOutlineIcon />,
      Path: "/students",
    },
    {
      text: "Applications",
      icon: <TextSnippetOutlinedIcon />,
      Path: "/applications",
    },
    {
      text: "Payment",
      icon: <PriceChangeOutlinedIcon />,
      Path: "/payment",
    },
    {
      text: "Users",
      icon: <PeopleAltOutlinedIcon />,
      Path: "/users",
    },
  ];

  const subMenuItems = [
    {
      text: "Help",
      icon: <HelpOutlineIcon />,
      Path: "/help",
    },
    {
      text: "Logout",
      icon: <ExitToAppIcon />,
      Path: "/logout",
    },
  ];

  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid",
          borderColor: "rgb(0 0 0 / 12%)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 3,
                ...(open && { display: "none" }),
              }}
            >
              <Image src={SmallLogo} alt="logo icon" />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: "inline" }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "96px",
            }}
          >
            <Box>
              <Notifications />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <UserProfile />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader
          sx={{ justifyContent: "space-between", paddingLeft: "15px" }}
        >
          <Image src={Logo} alt="logo" width={140} />
          <IconButton onClick={handleDrawerClose} item xs={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>
          {menuItems.map((item) => (
            <Link
              href={item.Path}
              key={item.text}
              rel="sidebar"
              className="sidebar_link"
            >
              <ListItem
                onClick={() => setActive(item.Path)}
                className={`sidebar_listing ${
                  pathname === item.Path ? "active" : ""
                }`}
              >
                <ListItemIcon className="sidebar_icon">
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  style={{
                    display: showMe ? "block" : "none",
                  }}
                  className="sidebar_text"
                />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        <List>
          {subMenuItems.map((item) => (
            <Link
              href={item.Path}
              key={item.text}
              rel="sidebar"
              className="sidebar_link"
            >
              <ListItem
                onClick={() => setActive(item.Path)}
                className={`sidebar_listing ${
                  pathname === item.Path ? "active" : ""
                }`}
              >
                <ListItemIcon className="sidebar_icon">
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  style={{
                    display: showMe ? "block" : "none",
                  }}
                  className="sidebar_text"
                />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ width: "calc(100% - 195px)" }}
      ></Box>
    </Box>
  );
}
