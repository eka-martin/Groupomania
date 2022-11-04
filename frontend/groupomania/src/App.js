import React from 'react';
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullPost } from "./pages/FullPost";
import {  Registration } from "./pages/Registration";
import { AddPost } from "./pages/AddPost";
import {  Login } from "./pages/Login/index";
import { Home } from "./pages/Home";
import { fetchAuth, selectIsAuth } from './redux/slices/auth';

function App() {

  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuth())
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
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

