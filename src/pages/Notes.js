import React, { useState , useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Container} from '@mui/material'
import NoteCard from '../Components/NoteCard'
import Masonry from "@mui/lab/Masonry";
import { Box } from '@mui/material';

export default function Notes() {
  const [notes , setNotes]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/notes').then(res=>res.json()).then((data)=>setNotes(data))

  },[])

  const deleteHandler=async(id)=>{
    await fetch(`http://localhost:5000/notes/${id}`,{
      method:'DELETE'
    })
    const newNotes=notes.filter(note=>note.id != id)
    setNotes(newNotes);
  }
  return (
    <div>

      {/* <Grid container>
        <Grid item xs={12} md={3} sm={6}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={6}>
          <Paper>1</Paper>
        </Grid>

      </Grid> */}
      <Container>

  <Box sx={{ width: 950, minHeight: 1129 }}>
        <Masonry columns={3} spacing={2}>
      {/* {/* <Grid container spacing={3}> */}
      {notes.map((note)=>(
        <div item xs={12} sm={6} md={4} key={note.id}> 
        {/* in place of div grid is written so that the it would be a grid */}
          {/* <Paper>{note.title}</Paper> */}
          <NoteCard note={note} ondelete={deleteHandler}></NoteCard>
         </div>
        ))}
      {/* </Grid> */}
       </Masonry>
      </Box>
      </Container>
      
       
      
   
    </div>
  )
}
