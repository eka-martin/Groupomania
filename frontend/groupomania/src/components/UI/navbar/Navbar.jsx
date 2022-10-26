import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import {  Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { ReactComponent as Logo } from '../../../images/logos/icon-left-font-monochrome-white.svg';


// import { ThemeProvider,  } from '@mui/material/styles';
// import theme from "../../../styles/Custom";

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    

    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <AppBar position="static" sx={{ bgcolor: 'tertiaire.main' }}>
        <Toolbar >
         
          <Box sx={{ flexGrow: 1 }}>
          <Link to="/about" >
          <div className="logo">
          <Logo className="logo_img" fill="#FFD7D7"></Logo>
          
            </div>
            </Link>
            </Box>
          
          <Link to="/about" style={{ textDecoration: 'none'}}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 3, color: 'secondary.main' }}>
            About
          </Typography></Link>
        <Link to="/posts" style={{ textDecoration: 'none'}}><Typography variant="h6" component="div" sx={{ flexGrow: 1, mr: 3, color: 'secondary.main' }}>
            Posts
          </Typography></Link>
       <Button variant="contained" color="secondary" onClick={logout}>Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}




      // <AppBar position="static" sx={{ bgcolor: 'tertiaire.main' }}>
      //       <Toolbar style={{ width: '100%' }}>
      //       <Box sx={{ display: 'flex', p: 1 }}>
      //       <Link to="/about" >
      //       <img
      //       sx={{ flexGrow: 1 }} 
      //       alt="logo" 
      //       src={require('../../../images/logos/icon-left-font-monochrome-white.svg')} />
      //       </Link>
                 
      //   <NavLink to="/about" activeStyle>About</NavLink>
      //   <NavLink to="/posts" activeStyle>Posts</NavLink>
      //   <Button color="secondary" onClick={logout}>Log out</Button>
      //   </Box>
      //       </Toolbar>
      //   </AppBar>
        
      
    
  
  // );



export default Navbar;