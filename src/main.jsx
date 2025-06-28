import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import Restaurante from "./Restaurante.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Restaurante />
  </StrictMode>
);
