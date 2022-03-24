import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";
import { border } from "@mui/system";
import { blue, red,green,pink, yellow } from "@mui/material/colors";
import { purple } from '@mui/material/colors';
// const useStyles = makeStyles({
  // test:{
  //   border:(note)=>{
  //     if (note.category==='female')
  //     return '1px solid red'
  //   }
  // },
  const useStyles = makeStyles((theme)=>{
    return{
    // avatar: {
      // backgroundColor: (note) => {
      //   if (note.category == 'female') {
      //     return yellow[700]
      //   }
      //   if (note.category == 'male') {
      //     return green[500]
      //   }
      //   if (note.category == 'others') {
      //     return pink[500]
      //   }
      //   return blue[500]
      // },
    
    }
  })

const NoteCard = ({ note, ondelete }) => {
  const classes = useStyles(note);
  return (
    // <div>{note.title}</div>
    <Card elevation={3} className={classes.test}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} 
         
          sx={{
                        backgroundColor: () => {
                              if (note.category === "female") return yellow[700];
                              if (note.category === "male") return green[500];
                              if (note.category === "other") return pink[500];
                              return blue[500];
                        }
           }}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => ondelete(note.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      ></CardHeader>
      <CardContent>
        <Typography variant="secondary">{note.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
