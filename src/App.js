import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Nav,
  Documentation,
  Footer,
  Home,
  Stations,
  About,
} from "./components/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true} basename="/">
        <Nav />
        <Routes>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/*`}
            element={<Home />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            element={<About />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/stations`}
            element={<Stations />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/documentation`}
            element={<Documentation />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
