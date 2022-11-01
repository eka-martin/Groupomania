import React from 'react';
import Container from "@mui/material/Container";
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPost } from "./pages/FullPost";
import {  Registration } from "./pages/Registration";
import { AddPost } from "./pages/AddPost";
import {  Login } from "./pages/Login/index";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

