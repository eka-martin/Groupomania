import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../../context";
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../../styles/Custom";

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static"
      sx={{ color: 'text.tertiaire' }}>
            <Toolbar>
            <Link to="/about">
            <img
            
            alt="logo" 
            src={require('../../../images/logos/icon-left-font-monochrome-black.svg')} />
            </Link>
                         
      
        <NavLink to="/about" activeStyle>About</NavLink>
        <NavLink to="/posts" activeStyle>Posts</NavLink>
        <Button color="secondary" onClick={logout}>Log out</Button>
      
            </Toolbar>
        </AppBar>
        </ThemeProvider>
      
    
  
  );

}

export default Navbar;