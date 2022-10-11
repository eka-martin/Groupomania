import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import { Button, AppBar, Toolbar, Typography} from '@mui/material';


function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    
      <AppBar position="static">
            <Toolbar>
                <Typography
                sx={{
                  flexGrow:'1'
                }}>
                    GROUPOMANIA
                </Typography>
              
      
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Button color="secondary" onClick={logout}>Log out</Button>
      
            </Toolbar>
        </AppBar>
      
      
    
  
  );

}

export default Navbar;