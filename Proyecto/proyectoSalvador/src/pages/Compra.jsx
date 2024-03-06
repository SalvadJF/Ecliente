import  Carrito  from "../components/Carrito";
const Compra = () => {
    return (
      <main role="main">
      <section>
          <div className="bannerCarrito">
            <h1>CARRITO</h1>
          </div>
      </section>
        <section>
          <Carrito />
        </section>
      </main>
    );
  };
  
  export default Compra;
  