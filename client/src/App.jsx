// Importing Dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Importing Componenets
import Navbar from "./Components/Navbar & footbar/Navbar";
import Footer from "./Components/Navbar & footbar/Footer";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import FeatureComingSoon from "./Components/ErrorPage/FeatureComingSoon";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="m-5">
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />
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
          <Route path="/contact/directory" element={<div>Directory</div>} />
          <Route
            path="/contact/LocationMap"
            element={<div>Location Map</div>}
          />
          {/* Doucments Routes */}
          <Route path="/documents/bye-laws" element={<div>bye-laws</div>} />
          {/* SOP Routes */}
          <Route path="/documents/SOP" element={<div>SOP</div>} />
          <Route
            path="/documents/SOP/maintenance-charges"
            element={<div>Maintenance Charges</div>}
          />
          <Route
            path="/documents/SOP/move-in-move-out"
            element={<div>Move in and Move OUt</div>}
          />
          <Route
            path="/documents/id-card-vechicle"
            element={<div>ID card and Vechcile</div>}
          />
          <Route
            path="/documents/SOP/interior-work"
            element={<div>Interior Work</div>}
          />
          {/* End of SOP Routes */}
          <Route
            path="/documents/Rule-and-Guidelines"
            element={<div>Rules & Guidelines</div>}
          />
          <Route
            path="/documents/new-to-society"
            element={<div>New to society</div>}
          />
          <Route path="/documents/downloads" element={<div>downloads</div>} />
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
          <Route path="/facilities" element={<div>facilites</div>} />
          {/* Classifieds Route */}
          <Route path="/classifieds" element={<div>classifieds</div>} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/featurecommingsoon" element={<FeatureComingSoon />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
