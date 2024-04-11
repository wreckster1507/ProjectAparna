import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css"; // Add the correct import statement for index.css

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
