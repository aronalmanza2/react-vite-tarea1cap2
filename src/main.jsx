import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import RestauranteC from "./RestauranteC.jsx";
import RestauranteF from "./RestauranteF.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <RestauranteC /> */}
    <RestauranteF />
  </StrictMode>
);
