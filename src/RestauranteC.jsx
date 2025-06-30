import { Component } from "react";
import "./Restaurante.css";
import { data } from "./data-restaurante/data";
import PlatoC from "./comp-restaurante/PlatoC";
import PlatoCT from "./comp-restaurante/PlatoCT";

class RestauranteC extends Component {
  render() {
    const { platos } = data;
    const {
      fnPlatosEntradas,
      fnPlatosPrincipales,
      fnPlatosPostres,
      fnPlatosBebidas,
      fnPlatosAperitivos,
    } = data;

    return (
      <main className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-warning" role="alert">
              <p className="titulo-restaurante">RESTAURANTE LUCHITO_C</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="alert alert-success p-0" role="alert">
              <PlatoC platos={platos} manual={true} titulo="Manual" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="alert alert-danger p-0" role="alert">
              <PlatoC platos={platos} manual={false} titulo="Auto" />
            </div>
          </div>
        </div>

        <PlatoCT platos={fnPlatosEntradas()} titulo="Categoria: Entradas" />
        <PlatoCT
          platos={fnPlatosPrincipales()}
          titulo="Categoria: Principales"
        />
        <PlatoCT platos={fnPlatosPostres()} titulo="Categoria: Postres" />
        <PlatoCT platos={fnPlatosBebidas()} titulo="Categoria: Bebidas" />
        <PlatoCT platos={fnPlatosAperitivos()} titulo="Categoria: Aperitivos" />
      </main>
    );
  }
}

export default RestauranteC;
