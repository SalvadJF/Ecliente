import PropTypes from 'prop-types';
import Logo from '../assets/react.svg'

export const Boton = ({ direccion, texto }) => {
  return (
    <button onClick={direccion}>
      {texto}
    </button>
  );
}

export const BotonLogo = ({direccion}) => {
  return (
    <a href={direccion} role='banner'>
      <img src={Logo}></img>
    </a>
  )
}

export const BotonNav = ({direccion, texto}) => {
  return (
    <a href={direccion} role='navigation'>
      {texto}
    </a>
  )
}

Boton.propTypes = {
  direccion: PropTypes.func.isRequired,
  texto: PropTypes.string.isRequired,
};

BotonLogo.propTypes = {
  direccion: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

BotonNav.propTypes = {
  direccion: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
};

