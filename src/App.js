import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Nav, Documentation, Footer, Home, Stations, About} from "./components/index.js"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />}/>
        <Route path="/stations" element={<Stations />}/>
        <Route path="/documentation" element={<Documentation />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
