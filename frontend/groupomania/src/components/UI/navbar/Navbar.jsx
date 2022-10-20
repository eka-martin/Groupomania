import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../context";
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { NavbarContainer} from './Navbar.style'
// import { ThemeProvider,  } from '@mui/material/styles';
// import theme from "../../../styles/Custom";

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    
      <AppBar position="static" sx={{ bgcolor: 'tertiaire.main' }}>
            <Toolbar style={{ width: '100%' }}>
            <Box sx={{ display: 'flex', p: 1 }}>
            <Link to="/about" >
            <img
            sx={{ flexGrow: 1 }} 
            alt="logo" 
            src={require('../../../images/logos/icon-left-font-monochrome-white.svg')} />
            </Link>
                 
        <NavLink to="/about" activeStyle>About</NavLink>
        <NavLink to="/posts" activeStyle>Posts</NavLink>
        <Button color="secondary" onClick={logout}>Log out</Button>
        </Box>
            </Toolbar>
        </AppBar>
        
      
    
  
  );

}

export default Navbar;