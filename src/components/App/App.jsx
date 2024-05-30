import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Page404 from "../Page404/Page404";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="Main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/home/:employee_no" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
