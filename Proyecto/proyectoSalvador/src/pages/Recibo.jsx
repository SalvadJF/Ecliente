import  Recibos  from "../components/Recibos";
const Recibo = () => {
    return (
      <main role="main">
      <section>
          <div className="bannerFactura">
            <h1>Recibos</h1>
          </div>
      </section>
        <section>
          <Recibos />
        </section>
      </main>
    );
  };
  
  export default Recibo;
  