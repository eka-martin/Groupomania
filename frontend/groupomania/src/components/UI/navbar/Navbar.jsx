import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";


function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <Button onClick={logout}>Log out</Button>
      <div className="navbar__links">
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  
  );

}

export default Navbar;