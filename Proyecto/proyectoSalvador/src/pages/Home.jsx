import Cc from "../assets/cc.svg";
import { Noticia } from "../components/Noticias";
import { Boton, BotonesD } from "../components/Botones";
import { Producto } from "../components/Productos";
import "../app.css";

const Home = () => {
  return (
    <main role="main">
      <section className="portada" aria-labelledby="portadaTitle">
        <h2 id="portadaTitle" className="visually-hidden">
          Portada
        </h2>
        <div>
          <h2 className="imagenCorporativa">TTT</h2>
        </div>
        <div>
          <h2 className="titulos">| Modelos y Texturas 3D</h2>
        </div>
        <div className="licenciaCC">
          <img src={Cc}></img>
        </div>
      </section>
      <section className="noticias" aria-labelledby="noticiasTitle">
        <h3 id="noticiasTitle">Noticias</h3>
        <div className="espacio" role="presentation"></div>
        <div className="portalNoticias">
          <Noticia
            imagen="/src/assets/noticia1.jpg"
            alt="Ejemplo de imagen 1"
            titulo="Noticia 1"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat."
            url="carrito"
            textoBoton="Leer"
          />
          <Noticia
            imagen="src/assets/noticia2.jpg"
            alt="Ejemplo de imagen 2"
            titulo="Noticia 2"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat."
            url="carrito"
            textoBoton="Leer"
          />
          <Noticia
            imagen="src/assets/noticia3.webp"
            alt="Ejemplo de imagen 3"
            titulo="Noticia 3"
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat."
            url="carrito"
            textoBoton="Leer"
          />
        </div>
        <div className="noticiasFin">
          <Boton direccion="carrito" texto="Ver mas noticias" />
        </div>
      </section>
      <section
        className="portadaArticulos"
        aria-labelledby="portadaArticulosTitle"
      >
        <h2 id="portadaArticulosTitle" className="visually-hidden">
          Portada de Artículos
        </h2>
        <div className="tooltipAportaciones">
          Ultimas Aportaciones
          <span className="tooltipTexto">
            Ultimas Aportaciones de los Usuarios
          </span>
        </div>
        <div className="portadaTendencias">
          <Producto
            usuario="src/assets/usuario.png"
            alt="Ejemplo de usuario 1"
            nombreU="Salva"
          />
          <Producto
            usuario="src/assets/usuario.png"
            alt="Ejemplo de usuario 2"
            nombreU="Salvi"
          />
          <Producto
            usuario="src/assets/usuario.png"
            alt="Ejemplo de usuario 3"
            nombreU="Paco"
          />
          <Producto
            usuario="src/assets/usuario.png"
            alt="Ejemplo de usuario 4"
            nombreU="Pepe"
          />
        </div>
      </section>
      <section className="botonesDirectos">
        <BotonesD />
      </section>
    </main>
  );
};

export default Home;
