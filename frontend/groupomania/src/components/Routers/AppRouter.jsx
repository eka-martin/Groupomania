import React, { useContext } from "react";
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../router";
import { AuthContext } from "../../context";

function AppRouter() {
  const {isAuth} = useContext(AuthContext); 
  console.log(isAuth)
  return (
        isAuth
        ?
        <Routes>
      {privateRoutes.map((route, index) => {
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
      :
      <Routes>
      {publicRoutes.map((route, index) => {
              return (
              <Route
              element={<route.element/>}
              path={route.path}
              key={index}
              />
        )
      })
      }
      <Route path="*" element={<Navigate to="/login" replace />} />


      </Routes>
    
  
  );

}

export default AppRouter;
