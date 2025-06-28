import { useState } from "react";
import viteLogo from "/vite.svg";
import "./Restaurante.css";

import { data } from "./dataRestaurante/data";

function Restaurante() {
  const [count, setCount] = useState(0);

  const { platos } = data;
  const primerPlato = platos && platos.length > 0 ? platos[0] : null;

  if (!primerPlato) {
    console.log("No hay platos disponibles.");
  } else {
    console.log(primerPlato);
  }

  return (
    <main className="container py-3">
      <div className="card text-center">
        <div className="card-header">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>

        <div className="card-body">
          <img
            src={platos[0].imagen}
            alt="imagen"
            className="img-mod rounded-5"
          />
        </div>

        <div className="card-footer">
          <h1>Vite + React</h1>
        </div>
      </div>

      <hr />

      <div className="card text-center">
        <div className="card-body">
          <button
            className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="lead p-4 m-0">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <div className="card-footer">
          <p>Click on the Vite logo to learn more</p>
        </div>
      </div>
    </main>
  );
}

export default Restaurante;
