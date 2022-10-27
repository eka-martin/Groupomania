import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/Routers/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false); 

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value ={{
      isAuth,
      setIsAuth
    }}>
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    <Footer/>      
    </BrowserRouter>
     
    </AuthContext.Provider>
    
  );

}

export default App;

