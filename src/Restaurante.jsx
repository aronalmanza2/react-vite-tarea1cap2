import { Component } from "react";
import "./Restaurante.css";
import { data } from "./data-restaurante/data";
import PlatoC from "./comp-restaurante/PlatoC";

class Restaurante extends Component {
  render() {
    const { platos } = data;

    return (
      <main className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning" role="alert">
              <p className="titulo-restaurante">RESTAURANTE LUCHITO</p>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xlg-45 g-4">
          <PlatoC platos={platos} />
        </div>
      </main>
    );
  }
}

export default Restaurante;
