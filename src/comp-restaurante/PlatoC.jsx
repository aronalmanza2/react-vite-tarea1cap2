import { Component } from "react";
import { CardPlato } from "./cardPlato";

class PlatoC extends Component {
  state = {
    indice: 0,
    indiceAuto: 0,
    pausado: false,
  };

  avanzar = () => {
    const { platos } = this.props;

    this.setState({
      indice:
        this.state.indice === platos.length - 1 ? 0 : this.state.indice + 1,
    });
  };

  retroceder = () => {
    this.setState({
      indice: this.state.indice === 0 ? 0 : this.state.indice - 1,
    });
  };

  pausar = () => {
    this.setState({ pausado: true });
  };

  continuar = () => {
    this.setState({ pausado: false });
  };

  avanzarAuto = () => {
    const { platos } = this.props;

    this.setState({
      indiceAuto:
        this.state.indiceAuto === platos.length - 1
          ? 0
          : this.state.indiceAuto + 1,
    });
  };

  componentDidMount() {
    this.idAutoPlay = setInterval(() => {
      if (!this.state.pausado) {
        this.avanzarAuto();
      }
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.idAutoPlay);
  }

  render() {
    const { platos, manual, titulo } = this.props;

    return (
      <div className="p-3 text-center">
        {manual ? (
          <>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger me-2" onClick={this.retroceder}>
                Retroceder
              </button>
              <button className="btn btn-primary ms-2" onClick={this.avanzar}>
                Avanzar
              </button>
            </div>
            <div className="my-3 d-flex justify-content-between">
              <span className="badge bg-success fs-6">{titulo}</span>
              <span className="badge bg-secondary fs-6">
                Plato {this.state.indice + 1} de {platos.length}
              </span>
            </div>
            <CardPlato plato={platos[this.state.indice]} />
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-warning me-2"
                onClick={this.pausar}
                disabled={this.state.pausado}
              >
                Pausar
              </button>
              <button
                className="btn btn-primary ms-2"
                onClick={this.continuar}
                disabled={!this.state.pausado}
              >
                Continuar
              </button>
            </div>
            <div className="my-3 d-flex justify-content-between">
              <span className="badge bg-success fs-6">{titulo}</span>
              <span className="badge bg-secondary fs-6">
                Plato {this.state.indiceAuto + 1} de {platos.length}
              </span>
            </div>
            <CardPlato plato={platos[this.state.indiceAuto]} />
          </>
        )}
      </div>
    );
  }
}

export default PlatoC;
