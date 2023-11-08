import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/Sign-in";
import User from "./pages/User";
import Error404 from "./pages/Error404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
