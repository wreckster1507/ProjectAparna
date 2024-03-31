// Importing Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/aboutus/AboutSociety"
          element={<div>About societry</div>}
        />
        <Route
          path="/aboutus/ManagementCommitee"
          element={<div>Management CommiƩee</div>}
        />
        <Route
          path="/aboutus/BlockRepresentaives"
          element={<div>Block RepresentaƟves</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
