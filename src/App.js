import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import {RoomsContextProvider} from "./context/RoomsContext"

function App() {
  return (
    <RoomsContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<About />} />
            <Route exact path="/calculator" element={<Calculator />} />
          </Routes>
        </Router>
      </div>
    </RoomsContextProvider>
  );
}

export default App;