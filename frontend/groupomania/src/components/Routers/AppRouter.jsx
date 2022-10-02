import React from "react";
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "../../pages/About";
import Posts  from "../../pages/Posts";
import Error  from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import { routes } from "../../router";

function AppRouter() {
   
  return (
    
        <Routes>
      {routes.map((route, index) => {
        return (
        <Route
        element={<route.element/>}
        path={route.path}
        key={index}
        />
  )
})
}
      <Route path="*" element={<Navigate to="/about" replace />} />


      </Routes>
    
  
  );

}

export default AppRouter;
