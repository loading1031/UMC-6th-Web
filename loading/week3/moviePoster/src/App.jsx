import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { API_KEY, API_URL } from "./Config";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet context={{ API_URL, API_KEY }} />
      <Footer />
    </div>
  );
}

export default App;
