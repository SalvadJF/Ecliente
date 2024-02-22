import PropTypes from "prop-types";
import Logo from "../assets/react.svg";
import "../app.css";

export const Boton = ({ direccion, texto }) => {
  return <button onClick={direccion}>{texto}</button>;
};

export const BotonLogo = ({ direccion, alt }) => {
  return (
    <a href={direccion} role="banner">
      <img src={Logo} alt={alt}></img>
    </a>
  );
};

export const BotonNav = ({ direccion, texto }) => {
  return (
    <a href={direccion} role="navigation">
      {texto}
    </a>
  );
};

export const BotonesD = () => {
  return (
    <>
      <div className="botonesTendencias">
        <button className="boton4">Ir a la Galeria</button>
        <button className="boton5">Sube tus modelos</button>
      </div>
      <div className="botonesTendencias">
        <p>¿No sabes y quieres empezar?</p>
        <button className="botonPago">
          <a href="carrito" role="button">
            Tutoriales
          </a>
        </button>
      </div>
    </>
  );
};

Boton.propTypes = {
  direccion: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
};

BotonLogo.propTypes = {
  direccion: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

BotonNav.propTypes = {
  direccion: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};
