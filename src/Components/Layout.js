import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {  Container, Divider, Drawer, Menu, MenuItem, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubjectIcon from "@mui/icons-material/Subject";
import Subject from "@mui/icons-material/Subject";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import NoteIcon from "@mui/icons-material/Note";
import { purple } from "@mui/material/colors";
import { SwipeableDrawer } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PhoneIcon from '@mui/icons-material/Phone';


import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notes from "../pages/Notes";
import Create from "../pages/Create";
import BoxPaper from "../pages/BoxPaper";
import Button from '@mui/material/Button';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    active: {
      backgroundColor: "purple",
    },
    titleNinza: {
      padding: 20,
    },
    page: {
      backgroundColor: "#f9f9f9",
      // width: "100%",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)!important`,
      height: 56,
    },
    avatar: {
      marginLeft: theme.spacing(3),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    name: {
      flexGrow: 1,
    },
  };
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const menuItem = [
  {
    text: "My Notes",
    icon: <SubjectIcon color="secondary"></SubjectIcon>,
    path: "/",
  },
  {
    text: "create",
    icon: <AddCircleOutlineIcon color="secondary"></AddCircleOutlineIcon>,
    path: "/create",
  },
  {
    text: "paper",
    icon: <NoteIcon color="secondary"></NoteIcon>,
    path: "/paper",
  },
];
function LinkTab(props) {
  console.log(props);
  return (
    <Tab
      component={Link}
      //   onClick={(event) => {
      //     event.preventDefault();
      //   }}
      to={props.pathname}
      {...props}
    />
  );
}

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [menu, setMenu]=useState(null);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const menuHandler=(event,val)=>{
    setMenu(event.currentTarget)
  }
  const menuOnClose=()=>{
    setMenu(null);
  }
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar className={classes.appBar} elevation={0}>
        <Toolbar>
          <NoteIcon
            sx={{ mr: 3 }}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          ></NoteIcon>
          <Typography variant="h5" className={classes.name}>
            Welcome to ninja web
          </Typography>

          {/* Tabs  */}
          <Tabs textColor="white" sx={{mr:25}} 
  indicatorColor="secondary" value={value} onChange={handleChange}>
            <LinkTab icon={<PhoneIcon />} iconPosition="start" label="Main" pathname="/" />
            <LinkTab label="Users" pathname="/create" />
            <LinkTab label="Me" pathname="/paper" />
            {/* <Typography variant="h1">{location.pathname}</Typography> */}

          <div>
            <Button
        id="basic-button" 
        variant="contained"
       
        onClick={menuHandler}
      sx={{mt:2, color:'white'}}
      >
        Dashboard
      </Button>
            <Menu open={menu} onClose={menuOnClose} anchorEl={menu}>
              <MenuItem onClick={menuOnClose}><Link to="/signin">sign In</Link></MenuItem>
              <MenuItem onClick={menuOnClose}><Link to="/login">log in </Link></MenuItem>
            </Menu></div>
          </Tabs>
          

          {/* search */}
          <Search sx={{ mr: 3 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
          <Typography>Mario</Typography>
          <Avatar src="/mario.png" className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Toolbar />

      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <Typography
          variant="body2"
          fontSize={35}
          className={classes.titleNinza}
        >
          {" "}
          ninja warrior
        </Typography>
        <Divider></Divider>
        {/* sidebar */}
        {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      > */}
        {/* <div>
          <Typography
            variant="body2"
            fontSize={45}
            className={classes.titleNinza}
          >
            {" "}
            ninja warrior
          </Typography>
        </div>
      {/* <List>
            <ListItem>
                <ListItemText primary='hello'></ListItemText>
            </ListItem>
        </List>
        <List>
            <ListItem>
                <ListItemText primary='hello'></ListItemText>
            </ListItem>
        </List> */}
        {/* list ! link */}

        <List>
          {menuItem.map((item, index) => (
            <div
              key={index}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItem
                // sx={{ color: "red" }}
                button
                key={item.text}
                onClick={() => history.push(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}></ListItemText>
              </ListItem>
            </div>
          ))}
        </List>
      </SwipeableDrawer>
      {/* </Drawer> */}


      <div>
        <Container sx={{ ml: "100px", mt: 3 }}>
          <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
