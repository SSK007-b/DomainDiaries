import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Optional: handle root existence safely
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("❌ Root element not found. Ensure `<div id='root'></div>` exists in index.html");
}

createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
