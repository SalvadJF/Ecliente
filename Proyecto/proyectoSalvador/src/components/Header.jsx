import { BotonNav, BotonLogo } from "./Botones";

const Header = () => {
  return (
    <header>
      <nav>
        <BotonLogo direccion="/" alt="TTT" />
        <ul>
          <li>
            <BotonNav direccion="/" texto="Inicio" />
          </li>
          <li>
            <BotonNav direccion="compra" texto="Compra" />
          </li>
          <li>
            <BotonNav direccion="recibos" texto="Recibos" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
