import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Checkbox, Container, TextField, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { green } from "@mui/material/colors";
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const LogIn = () => {
  const [login, setlogin] = useState(false)
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullnameError, setFullnameError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const [passwordError,setPasswordError]=useState(false);
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 let mediumRegex=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  const [values, setValues] = React.useState({  password: '',showPassword: false});
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const buttonHandler = () => {
    setlogin((prevState) => !prevState);
  };
  const fullnameHandler = (event) => {
    
    setFullName(event.target.value);
    
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
 
  const submitHandler = (event) => {
    console.log(fullname, email, values);
setFullnameError(false);
setEmailError(false);
setPasswordError(false)
    if (fullname=='' ){
      setFullnameError(true);
    }
    // if ( email=='' & ! email.includes('@')){
    //   setEmailError(true);
    // }
    if(re.test(email)){
      console.log(email)
    }else{
      setEmailError(true)
    }
    if (mediumRegex.test(values.password)){
      console.log(values.password)
    }else{
      setPasswordError(true)
      
    }
    
  };
  return (
    // <div>
      <Container  maxWidth="sm">
      <Stack spacing={2} sx={{alignItems:'center', ml:'31ch'}}>
        <Typography>{login ? "Log in " : "Registration"}</Typography>

        {!login && (
          <FormControl sx={{ m: 1 }} variant="outlined"fullWidth>
          <InputLabel htmlFor="outlined-adornment-fullname" required>full name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-fullname"
            value={fullname}
            onChange={fullnameHandler}
            error={fullnameError}
            startAdornment={
              <InputAdornment position="end">
                <PersonIcon/>
              </InputAdornment>
            }
            label="fullname"
          />
        </FormControl>)}
          
        <FormControl sx={{ m: 1}} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-email" required>Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"

            value={email}
            onChange={emailHandler}
            error={emailError}
            startAdornment={
              <InputAdornment position="end">
                <AccountCircleIcon/>
              </InputAdornment>
            }
            label="email"
          />
        </FormControl>
        {!login && <FormControl sx={{ m: 1, }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-address">address</InputLabel>
          <OutlinedInput
            id="outlined-adornment-address"
            startAdornment={
              <InputAdornment position="end">
                <HomeIcon/>
              </InputAdornment>
            }
            label="address"
          />
        </FormControl>}
        {!login && <FormControl sx={{ m: 1, }} variant="outlined" fullWidth>
          <InputLabel htmlFor="outlined-adornment-phone">phone</InputLabel>
          <OutlinedInput
            id="outlined-adornment-phone"
            startAdornment={
              <InputAdornment position="end">
                <LocalPhoneIcon/>
              </InputAdornment>
            }
            label="address"
          />
        </FormControl>}
  
  
        <FormControl sx={{ m: 1 }} variant="outlined"fullWidth>
          <InputLabel htmlFor="outlined-adornment-password" required>Password</InputLabel>
          <OutlinedInput
        
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            error={passwordError}
            
            startAdornment={
              <InputAdornment position="end">
                <VisibilityIcon
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </VisibilityIcon>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {login && (
          <Stack direction="row" spacing={2}>
            <Checkbox></Checkbox><Typography>Remember me</Typography>
          </Stack>
        )}

        <Button variant="contained" onClick={submitHandler} sx={{fontFamily:'sans-serif'}} fullWidth>
          {login ? "login" : "create new account "}
        </Button>
        {login && <Button  sx={{fontFamily:'sans-serif'}}fullWidth>forgot password</Button>}
        <Button onClick={buttonHandler} sx={{fontFamily:'sans-serif'}} fullWidth>
          {" "}
          {login ? " create user " : "login iwth existing account"}
        </Button>
      </Stack>
      </Container>
    // </div>
  );
};

// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
// This regex will enforce these rules:

// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)

export default LogIn;
