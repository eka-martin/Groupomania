import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./pages/About";
import Posts  from "./pages/Posts";


function App() {
   
  return (
    <Router>
      
      <Route path="/about" component={About}/>
      <Route path="/posts" component={Posts}/>
       
      
    </Router>
    
  );

}

export default App;

