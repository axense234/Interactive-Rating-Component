import React from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./index.css";

// Import Rating Component
import RatingComponent from "./RatingComponent";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RatingComponent />
  </React.StrictMode>
);
