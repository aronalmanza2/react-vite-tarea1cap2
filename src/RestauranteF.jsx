import "./Restaurante.css";
import { data } from "./data-restaurante/data";
import PlatoF from "./comp-restaurante/PlatoF";
import PlatoFT from "./comp-restaurante/PlatoFT";

const { platos } = data;
const {
  fnPlatosEntradas,
  fnPlatosPrincipales,
  fnPlatosPostres,
  fnPlatosBebidas,
  fnPlatosAperitivos,
} = data;

const RestauranteF = () => {
  return (
    <main className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-12">
          <div className="alert alert-warning" role="alert">
            <p className="titulo-restaurante">RESTAURANTE LUCHITO_F</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="alert alert-success p-0" role="alert">
            <PlatoF platos={platos} manual={true} titulo="Manual" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="alert alert-danger p-0" role="alert">
            <PlatoF platos={platos} manual={false} titulo="Auto" />
          </div>
        </div>
      </div>

      <PlatoFT platos={fnPlatosEntradas()} titulo="Categoria: Entradas" />
      <PlatoFT platos={fnPlatosPrincipales()} titulo="Categoria: Principales" />
      <PlatoFT platos={fnPlatosPostres()} titulo="Categoria: Postres" />
      <PlatoFT platos={fnPlatosBebidas()} titulo="Categoria: Bebidas" />
      <PlatoFT platos={fnPlatosAperitivos()} titulo="Categoria: Aperitivos" />
    </main>
  );
};

export default RestauranteF;
