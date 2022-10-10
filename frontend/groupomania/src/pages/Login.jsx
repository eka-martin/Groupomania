import React, { useContext } from "react";
import '../App.css';
import MyInput from "../components/UI/input/MyInput";
import { Button } from "@mui/material";
import { AuthContext } from "../context";
import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../styles/Custom";



const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
console.log(isAuth, 'tes')
  const login = event => {
    event.preventDefault();
    console.log('login');
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  return (
    <ThemeProvider theme={theme}>
    <div className="App"> 
    <div className="App-wrapper">
     <form onSubmit={login}>
     <TextField id="outlined-basic" label="Login" variant="outlined" />
     <TextField id="outlined-basic" label="Password" variant="outlined" />
     <Button type="submit" variant="contained" >Log In</Button>
     </form>  
     </div>
     </div>
     </ThemeProvider>
  );

}

export default Login;


