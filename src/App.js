import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculator from "./pages/Calculator";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;