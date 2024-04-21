import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { API_URL, API_KEY } from './Config';
import './App.css';
import { Outlet } from 'react-router-dom';

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




