import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import "../src/index.css"; // Add the correct import statement for index.css

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
