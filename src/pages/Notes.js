import React, { useState , useEffect} from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {Container} from '@mui/material'
import NoteCard from '../Components/NoteCard'

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

      <Grid container spacing={3}>{notes.map((note)=>(
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          {/* <Paper>{note.title}</Paper> */}
          <NoteCard note={note} ondelete={deleteHandler}></NoteCard>
        </Grid>))}
      </Grid>
      </Container>
      
       
      
   
    </div>
  )
}
