import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import User from "./components/User";
const App = () => {
  // if (window.location.pathname === "/") {
  //   document.getElementById("btn_1").style.display = "flex";
  // }
  return (
    <Router>
      <Routes>
         <Route path="/" element={<Home />} />
      </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
     
    </Router>
  );
};

export default App;
