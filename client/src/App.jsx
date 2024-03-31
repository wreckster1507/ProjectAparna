// Importing Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<div>Home</div>} />
        {/* About Us Routes */}
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
        {/* Contact Routes */}
        <Route path="/contact/drectory" element={<div>Directory</div>} />
        <Route path="/contact/LocationMap" element={<div>Location Map</div>} />
        {/* Doucments Routes */}
        <Route path="/doucments/bye-laws" element={<div>bye-laws</div>} />
        <Route path="/doucments/SOP" element={<div>SOP</div>} />
        <Route
          path="/doucments/Rule&Guidelines"
          element={<div>Rules & Guidelines</div>}
        />
        <Route
          path="/doucments/new-to-society"
          element={<div>New to society</div>}
        />
        <Route path="/doucments/downloads" element={<div>downloads</div>} />
        {/* Happenings  Route*/}
        <Route
          path="/happenings/new-and-circulars"
          element={<div>news and circilars</div>}
        />
        <Route
          path="/happenings/photo-gallery"
          element={<div>photos galaries</div>}
        />
        {/* Facilites Route */}
        <Route path="facilites" element={<div>facilites</div>} />
        {/* Classifieds Route */}
        <Route path="/classifieds" element={<div>classifieds</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
