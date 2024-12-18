import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
