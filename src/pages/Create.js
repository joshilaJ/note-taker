import React, { useState } from 'react'
import { Button, ButtonGroup, FormControl, FormControlLabel, FormLabel, RadioGroup, Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import { Container } from '@mui/material'
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { color, width } from '@mui/system';

const useStyles=makeStyles({
  field:{
    marginTop:80,
    marginBottom:80
  },
  btn:{
    fontSize:60,
    margin:89,
    backgroundColor:'red',
    '&:hover':{
      backgroundColor:'blue'
    }

  },
  title:{
    textDecoration:'underline',
    fontSize:90
  }
})
  export default function Create() {
    const classes=useStyles();
    const history=useHistory();

    const [title , setTitle]=useState('')
    const [detail, setDetail]=useState('');
const [textError, setTextError]=useState(false);
const [detailError, setDetailError]=useState(false);
const [category, setCategory]=useState('other')
    const textHandler=(e)=>{
      setTitle(e.target.value)
    }

    const detailHandler=(e)=>{
      setDetail(e.target.value)
    }

    const submitHandler=(e)=>{
      e.preventDefault();
      setTitle(false);
      setDetailError(false)
      if(title===''){
        setTextError(true)
      }
      if (detail===''){
        setDetailError(true);
      }

      if (title && detail){
     fetch('http://localhost:5000/notes',{
       method:'POST',
       headers:{
         "Content-type":"application/json"
       },
       body:JSON.stringify({title,detail,category})
     }).then(history.push('/'))
      }
    }

  return (
   
    <Container className={classes.color}>
      Create page
      <Typography 
      className={classes.title}
      variant='h6'
      color='secondary'
      component='h2' gutterBottom>
        hello
      </Typography>
      <form noValidate autoComplete='false' onSubmit={submitHandler}>
        <TextField 
        required 
        label='note title' 
        fullWidth
        variant='outlined'
        color='secondary'
        onChange={textHandler}
        error={textError}></TextField>
         <TextField 
         sx={{pt:1}}
        required 
        label='details' 
        fullWidth
        variant='outlined'
        color='secondary'
        multiline
        rows={5}
        onChange={detailHandler}
        error={detailError}></TextField>
         <Button 
      className={classes.btn}
      // onClick={()=>{console.log('you clicked me')}} 
      type='submit' 
      color='primary' 
      variant='contained' 
      disableElevation
      startIcon={<SendIcon></SendIcon>}
      endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}>submit</Button>
      </form>
      <FormControl className='classes.field'>
      <FormLabel>Note category</FormLabel>
      <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      </FormControl>
      {/* <Button variant='outlined' color='secondary'>click</Button>
      <Button type='submit'>submit</Button>
      <ButtonGroup color='primary' variant='contained'>
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
        </ButtonGroup> */}
        {/* icons */}
        {/* <AcUnitOutlinedIcon color='primary' fontSize='large'/>
        <AcUnitOutlinedIcon color='secondary' fontSize='small'/>
        <AcUnitOutlinedIcon color='error'fontSize='small'/>
        <AcUnitOutlinedIcon color='action' fontSize='small'></AcUnitOutlinedIcon>
        <AcUnitOutlinedIcon color='disabled' fontSize='small'/> */}
    </Container>
  )
}
