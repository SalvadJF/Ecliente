import PropTypes from "prop-types";
import { Boton } from "./Botones";
import "../app.css";

export const Noticia = ({ imagen, alt, titulo, texto, url, textoBoton }) => {
  return (
    <div className="noticia">
      <img className="imagenNoticias" src={imagen} alt={alt} />
      <h4>{titulo}</h4>
      <p>{texto}</p>
      <Boton direccion={url} texto={textoBoton} />
    </div>
  );
};

Noticia.propTypes = {
  imagen: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  textoBoton: PropTypes.string.isRequired,
};
