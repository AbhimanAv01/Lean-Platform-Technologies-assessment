// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Popular from "./Popular";
import Story from "./Story";

function App() {
  // On click of the direct url. the category whose name is mentioned in the url should open up

  return (
    <div className="header">
      <Navbar />
      <BrowserRouter>
        <Routes>
         
          <Route path="/" element={<Story />} />

          {/* Route for individual category */}
          <Route path="/category/:categoryName" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
