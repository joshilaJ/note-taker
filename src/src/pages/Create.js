import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import { Container } from "@mui/material";
// import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { color, width } from "@mui/system";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Box } from "@mui/system";
import Switch from '@mui/material/Switch';

const useStyles = makeStyles({
  // field: {
  //   marginTop: 80,
  //   marginBottom: 80,
  //   marginRight:80
  // },
  name: {
    flexGrow: 1,
  },
  btn: {
    fontSize: 60,
    margin: 89,
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  title: {
    textDecoration: "underline",
    fontSize: 90,
  },
});
export default function Create() {
  const [date, setDate] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [details, setDetail] = useState("");
  const [textError, setTextError] = useState(false);
  const [detailError, setDetailError] = useState(false);
  const [category, setCategory] = useState("other");
  const [checked, setChecked]=useState([]);
  const [select, setSelect]=useState('');
  const [sWitch, setSwitch]=useState(true);

  const textHandler = (e) => {
    setTitle(e.target.value);
  };

  const detailHandler = (e) => {
    setDetail(e.target.value);
  };
  
  const checkboxHandler=(e)=>{
    
    let data=checked;
    data.push(e.target.value)
    // setChecked(e.target.checked)
   
    setChecked(data)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setTitle(false);
    setDetailError(false);
    if (title === "") {
      setTextError(true);
    }
    if (details === "") {
      setDetailError(true);
    }

    if (title && details) {
      fetch("http://localhost:5000/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, details, category,checked }),
      }).then(history.push("/"));
    }
  };
  
  

  return (
    <Container className={classes.color}>
      Create page
      <Typography
        className={classes.title}
        variant="h6"
        color="secondary"
        component="h2"
        gutterBottom
      >
        hello
      </Typography>
      <form noValidate autoComplete="false" onSubmit={submitHandler}>
        <TextField
          required
          label="note title"
          fullWidth
          variant="outlined"
          color="secondary"
          onChange={textHandler}
          error={textError}
        ></TextField>
        <TextField
          sx={{ pt: 1 }}
          required
          label="details"
          fullWidth
          variant="outlined"
          color="secondary"
          multiline
          rows={5}
          onChange={detailHandler}
          error={detailError}
        ></TextField>

        {/* radio Group  */}
        <FormControl className={classes.name} sx={{ margin: 1}}>
          <FormLabel>Note category</FormLabel>
          <RadioGroup
          row
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* date picker  */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            fullWidth
            label="Pick date"
            value={date}
            onChange={(e) => {
              setDate(e);
            }}
            renderInput={(params) => (
              <TextField {...params} sx={{ margin: 1, ml:29 }} />
            )}
          />
        </LocalizationProvider>
        <br></br>

              {/* check box */}
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <FormControlLabel 
          label='math'control={<Checkbox onChange={checkboxHandler} value='math'></Checkbox>}/>
          <FormControlLabel
          label='science' control={<Checkbox onChange={checkboxHandler} value='science'/>}/>
        </FormControl>

        {/* form select */}
        <FormControl variant="standard" sx={{ ml: 50, minWidth: 178 }}>
                <InputLabel>Age</InputLabel>
        <Select
          value={select} 
          label='Age'
          onChange={(e)=>setSelect(e.target.value)}
          autoWidth>
             <MenuItem value="">
            <em>None</em>
          </MenuItem>
            <MenuItem value={20}> twenty</MenuItem>
            <MenuItem value={30}>thirty</MenuItem>
            <MenuItem value={40}>forty</MenuItem>
        </Select>
        </FormControl>
        <br></br>
        <FormControl  variant="standard">
          <FormControlLabel label='bluetooth' control={
        <Switch color="secondary" value={sWitch} size="small" onChange={(e,val)=>{console.log(e.target.checked)}}></Switch>}>
          </FormControlLabel> </FormControl><Button
          className={classes.btn}
          // onClick={()=>{console.log('you clicked me')}}
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
          startIcon={<SendIcon></SendIcon>}
          endIcon={<KeyboardArrowRightIcon></KeyboardArrowRightIcon>}
        >
          submit
        </Button>

      </form>
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
  );
}
