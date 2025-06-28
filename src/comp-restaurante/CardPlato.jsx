export const CardPlato = ({ plato }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={plato.imagen}
        alt={plato.nombre}
        className="card-img-top"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          {plato.nombre}
          <span className="badge bg-primary ms-2">
            S/. {plato.precio}
          </span>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{plato.categoria}</h6>
        <p className="card-text flex-grow-1">{plato.descripcion}</p>
      </div>
    </div>
  );
};
