import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts  from "./pages/Posts";
import Error  from "./pages/Error";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/Routers/AppRouter";

function App() {
   
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>       
    </BrowserRouter>
    
  );

}

export default App;

