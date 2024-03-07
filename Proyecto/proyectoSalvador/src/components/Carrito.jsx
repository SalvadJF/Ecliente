import React, { useState } from "react";
import almacenJson from "./Almacen.json";
import axios from "axios";

const Producto = ({ producto, onAgregarAlCarrito }) => {
  return (
    <div className="exposicionArticulo">
      <li>
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcion}</p>
        <div className="descripcionCarrito">
          <p>{producto.nombre} ${producto.precio}</p>
          <button className="botonCarrito" onClick={() => onAgregarAlCarrito(producto)}>
            Agregar
          </button>
        </div>
      </li>
    </div>
  );
};

const ItemCarrito = ({ objeto, onEliminarDelCarrito, botonesBloqueados }) => {
  return (
    <div className="cartaFactura">
    <li className="objetoFactura">
      {objeto.nombre} - ${objeto.precio}
      <button className="botonCarrito" onClick={onEliminarDelCarrito} disabled={botonesBloqueados}>
        Eliminar
      </button>
    </li>
    </div>
  );
};

const CarritoCompra = () => {
  const [objetos, setObjetos] = useState([]);
  const [total, setTotal] = useState(0);
  const [facturaGenerada, setFacturaGenerada] = useState(false);
  const [confirmacionVisible, setConfirmacionVisible] = useState(false);
  const [botonesBloqueados, setBotonesBloqueados] = useState(false); // Nuevo estado

  const productos = almacenJson.productos.producto;

  const agregarAlCarrito = (producto) => {
    const productoExistente = objetos.find((obj) => obj.id === producto.id);
    if (!productoExistente) {
      setObjetos([...objetos, producto]);
      setTotal(parseFloat((total + producto.precio).toFixed(2)));
    }
  };

  const borrarDelCarrito = (index, precio) => {
    if (botonesBloqueados) return; // Si los botones están bloqueados, salir sin hacer nada

    const nuevoObjeto = objetos.filter((_, i) => i !== index);
    setObjetos(nuevoObjeto);
    let nuevoTotal = total - precio;
    if (nuevoTotal < 0) {
      nuevoTotal = 0;
    }
    setTotal(parseFloat(nuevoTotal.toFixed(2)));
  };

  // LLamamos al serivodr con axios para escribir en el json Facturas
  const facturar = () => {
    const factura = {
      total: total,
      articulos: objetos.map(objeto => objeto.id)
    };
  
    axios.post('http://localhost:3001/facturas', factura) // Hacer la solicitud con Axios
    .then(response => {
      console.log('Factura generada correctamente:', response.data);
      setFacturaGenerada(true);
    })
    .catch(error => {
      console.error('Error al generar la factura:', error);
    });
  };

  const generarFacturaTexto = () => {
    const facturaTexto = `Total: ${total.toFixed(2)}\nArtículos:\n${objetos.map(objeto => `${objeto.nombre} - ${objeto.precio}`).join('\n')}`;
    return facturaTexto;
  };

  const descargarFactura = () => {
    const facturaTexto = generarFacturaTexto();
    const blob = new Blob([facturaTexto], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    // Crear un enlace <a> para descargar la factura
    const a = document.createElement('a');
    a.href = url;
    a.download = 'factura.txt';

    // Agregar el enlace al DOM y forzar el clic
    document.body.appendChild(a);
    a.click();

    // Eliminar el enlace del DOM después de que se haya descargado la factura
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    setFacturaGenerada(true);
    setConfirmacionVisible(true);
    setBotonesBloqueados(true); // Bloquear los botones después de realizar la compra
  };

  const reiniciarCompra = () => {
    setObjetos([]);
    setTotal(0);
    setFacturaGenerada(false);
    setConfirmacionVisible(false);
    setBotonesBloqueados(false); // Desbloquear los botones al iniciar una nueva compra
  };

  return (
    <div>
      <div className="listaArticulos">
        <h1>Articulos</h1>
        <ul>
          {productos.map((producto, index) => (
            <Producto
              key={index}
              producto={producto}
              onAgregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </ul>
      </div>
      {total > 0 && (
        <div className="facturaCarrito">
          <h1>Factura</h1>
          <ul className="listaProductos">
            {objetos.map((objeto, index) => (
              <ItemCarrito
                key={index}
                objeto={objeto}
                onEliminarDelCarrito={() => borrarDelCarrito(index, objeto.precio)}
                botonesBloqueados={botonesBloqueados} // Pasar el estado a los componentes de botón
              />
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={descargarFactura} className="botonFactura">Realizar Compra</button>
          <button onClick={facturar}className="botonFactura">Meter Factura en Json</button>
          {confirmacionVisible && (
            <div>
              <p>¡Factura generada correctamente!</p>
              <button onClick={reiniciarCompra} className="botonFactura">Iniciar otra compra</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
          };
export default CarritoCompra;