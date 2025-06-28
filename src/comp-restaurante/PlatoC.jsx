import { Component } from "react";
import { CardPlato } from "./cardPlato";


class PlatoC extends Component {
  render() {
    const { platos } = this.props;

    return (
      <>
        {platos.map((plato, index) => (
          <div className="col" key={index}>
            <CardPlato plato={plato} />
          </div>
        ))}
      </>
    );
  }
}

export default PlatoC;
