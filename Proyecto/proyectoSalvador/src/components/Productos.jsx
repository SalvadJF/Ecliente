import PropTypes from "prop-types";

export const Producto = ({ usuario, alt, nombreU }) => {
  return (
    <div className="Producto">
      <div className="productoEncabezado">
        <img src={usuario} alt={alt} />
        <p>{nombreU}</p>
      </div>
      <div className="espacioProducto" role="presentation"></div>
      <div className="productoPie">
        <div className="Likes" role="button">
          <button></button>
        </div>
        <div className="cuadradoGris">Visitas</div>
        <div className="Favoritos" role="button">
          <button></button>
        </div>
      </div>
    </div>
  );
};

Producto.propTypes = {
  usuario: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  nombreU: PropTypes.string.isRequired,
};
