import { CardPlato } from "./cardPlato";

const PlatoFT = (props) => {
  const { platos, titulo } = props;

  return (
    <div className="col-12">
      <div className="alert alert-secondary p-5" role="alert">
        <div className="my-3 d-flex flex-column flex-md-row justify-content-between">
          <span className="badge bg-danger fs-6 mb-2 mb-md-0">{titulo}</span>
          <span className="badge bg-secondary fs-6">
            Total de Platos: {platos.length}
          </span>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {platos.map((plato, index) => (
            <div className="col" key={index}>
              <CardPlato plato={plato} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatoFT;
