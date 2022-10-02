import React from "react";
import '../App.css';
import MyInput from "../components/UI/input/MyInput";
import { Button } from "@mui/material";



const Login = () => {
   
  return (
    <div> 
     <h1>Page identification</h1> 
     <form>
        <MyInput type="text" placeholder="Login"/>
        <MyInput type="password" placeholder="Password"/>
        <Button variant="contained">Log In</Button>
     </form>  
    </div>
  
  );

}

export default Login;