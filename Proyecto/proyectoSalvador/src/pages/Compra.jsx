import { Carrito } from "../components/Carrito";
const Compra = () => {
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
        </section>
        <section>
          <Carrito />
        </section>
      </main>
    );
  };
  
  export default Compra;
  