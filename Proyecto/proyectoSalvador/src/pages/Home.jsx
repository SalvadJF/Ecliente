import Cc from "../assets/cc.svg";


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
    </main>
  );
};

export default Home;
