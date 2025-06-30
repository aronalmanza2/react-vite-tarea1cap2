import { useState } from "react";
import { useEffect } from "react";
import { CardPlato } from "./cardPlato";

const PlatoF = (props) => {
  const { platos, manual, titulo } = props;

  const [indice, setIndice] = useState(0);
  const [indiceAuto, setIndiceAuto] = useState(0);
  const [pausado, setPausado] = useState(false);

  const avanzar = () => {
    setIndice((x) => (x === platos.length - 1 ? 0 : x + 1));
  };

  const retroceder = () => {
    setIndice((x) => (x === 0 ? 0 : x - 1));
  };

  const pausar = () => setPausado(true);
  const continuar = () => setPausado(false);

  const avanzarAuto = () => {
    setIndiceAuto((x) => (x === platos.length - 1 ? 0 : x + 1));
  };

  useEffect(() => {
    const idAutoPlay = setInterval(() => {
      if (!pausado) {
        avanzarAuto();
      }
    }, 3000);

    return () => clearInterval(idAutoPlay);
  }, [pausado, manual]);

  return (
    <div className="p-3 text-center">
      {manual ? (
        <>
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger me-2" onClick={retroceder}>
              Retroceder
            </button>
            <button className="btn btn-primary ms-2" onClick={avanzar}>
              Avanzar
            </button>
          </div>
          <div className="my-3 d-flex justify-content-between">
            <span className="badge bg-success fs-6">{titulo}</span>
            <span className="badge bg-secondary fs-6">
              Plato {indice + 1} de {platos.length}
            </span>
          </div>
          <CardPlato plato={platos[indice]} />
        </>
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-warning me-2"
              onClick={pausar}
              disabled={pausado}
            >
              Pausar
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={continuar}
              disabled={!pausado}
            >
              Continuar
            </button>
          </div>
          <div className="my-3 d-flex justify-content-between">
            <span className="badge bg-success fs-6">{titulo}</span>
            <span className="badge bg-secondary fs-6">
              Plato {indiceAuto + 1} de {platos.length}
            </span>
          </div>
          <CardPlato plato={platos[indiceAuto]} />
        </>
      )}
    </div>
  );
};

export default PlatoF;
