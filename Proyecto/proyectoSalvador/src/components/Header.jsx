import { BotonNav, BotonLogo } from "./Botones";

const Header = () => {
  return (
    <header>
      <nav>
        <BotonLogo direccion="/" texto="TTT" />
        <ul>
          <li>
            <BotonNav direccion="/" texto="Inicio" />
          </li>
          <li>
            <BotonNav direccion="compra" texto="Compra" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
