import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Container, Divider, Drawer, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SubjectIcon from "@mui/icons-material/Subject";
import Subject from "@mui/icons-material/Subject";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import NoteIcon from "@mui/icons-material/Note";
import { purple } from "@mui/material/colors";
import { SwipeableDrawer } from "@mui/material";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => {
  return {
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

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        // className={classes.appbar}
        // style={{ width: `calc(100% - ${drawerWidth}px)` }}
        elevation={0}
      >
        <Toolbar>
        <NoteIcon
        sx={{mr:3}}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
          ></NoteIcon>
          <Typography variant="h5" className={classes.name}>
            Welcome to ninja web
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario.png" className={classes.avatar} />

         
        </Toolbar>
      </AppBar>
      
      <SwipeableDrawer
      
      
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        // onOpen={() => {}}
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
        </div> */}
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
          {menuItem.map((item) => (
            <div
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
        <Container sx={{ml:'100px', mt:3}}>
          <div className={classes.page}>
            <div className={classes.toolbar } ></div>
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Layout;
