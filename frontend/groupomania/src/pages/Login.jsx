import React, { useContext } from "react";
import '../App.css';
import MyInput from "../components/UI/input/MyInput";
import { Button } from "@mui/material";
import { AuthContext } from "../context";



const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  return (
    <div className="App"> 
    <div className="App-wrapper">
     <h1>Page identification</h1> 
     <form onSubmit={login}>
        <MyInput type="text" placeholder="Login"/>
        <MyInput type="password" placeholder="Password"/>
        <Button variant="contained">Log In</Button>
     </form>  
     </div>
     </div>
  );

}

export default Login;


