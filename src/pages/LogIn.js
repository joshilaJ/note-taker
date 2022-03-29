import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Checkbox, Container, TextField, Typography } from "@mui/material";
import { Box, typography } from "@mui/system";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { green } from "@mui/material/colors";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Input from "@mui/material/Input";
const LogIn = () => {
  const [login, setlogin] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [fullnameError, setFullnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let mediumRegex = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  const errorMessage = "Please enter your VolunteerHub ";
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
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
  const addressHandler = (event) => {
    setAddress(event.target.value);
  };
  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const submitHandler = (event) => {
    console.log(fullname, email, values);
    setFullnameError(false);
    setEmailError(false);
    setPasswordError(false);
    if (fullname == "") {
      setFullnameError(true);
    }
    // if ( email=='' & ! email.includes('@')){
    //   setEmailError(true);
    // }
    if (re.test(email)) {
      console.log(email);
    } else {
      setEmailError(true);
    }
    if (mediumRegex.test(values.password)) {
      console.log(values.password);
    } else {
      setPasswordError(true);
    }
    if (address == "") {
      setAddressError(true);
    }
    if (phone == "") {
      setPhoneError(true);
    }
  };
  return (
    <div >
      <Container maxWidth="sm" >
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Typography>{login ? "Log in " : "Registration"}</Typography>

          {!login && (
            <TextField
              required
              fullWidth
              onChange={fullnameHandler}
              error={fullnameError}
              label="fullname"
              helperText={fullnameError && "Enter valid full name"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <TextField
            required
            fullWidth
            error={emailError}
            onChange={emailHandler}
            label="Email"
            helperText={emailError && "Enter valid email"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon></AccountCircleIcon>
                </InputAdornment>
              ),
            }}
          />

          {!login && (
            <TextField
              fullWidth
              label="Address"
              onChange={addressHandler}
              error={addressError}
              helperText={addressError && "enter address"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon></HomeIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
          {!login && (
            <TextField
              fullWidth
              onChange={phoneHandler}
              error={phoneError}
              helperText={phoneError && "enter phone "}
              label="Phone"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password" required>
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              error={passwordError}
              FormHelperText="enter valid password"
              endAdornment={
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
            <Stack direction="row">
              <Checkbox />
              <Typography sx={{ mt: 1 }}>Remember me</Typography>
            </Stack>
          )}

          <Button
            variant="contained"
            onClick={submitHandler}
            sx={{ fontFamily: "sans-serif" }}
            fullWidth
          >
            {login ? "login" : "create new account "}
          </Button>
          {login && (
            <Link sx={{ fontFamily: "sans-serif" }} fullWidth>
              forgot password
            </Link>
          )}
          <Link
            onClick={buttonHandler}
            sx={{ fontFamily: "sans-serif" }}
            fullWidth
          >
            {" "}
            {login ? " create user " : "login iwth existing account"}
          </Link>
        </Stack>
      </Container>
    </div>
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
