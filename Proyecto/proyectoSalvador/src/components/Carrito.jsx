import { useState } from 'react';
import datosJson from "./Almacen.json"


const CarritoCompra = () => {
    const [objetos, setObjetos] = useState([]);
    const [total, setTotal] = useState(0);
  
    // Función para agregar un elemento al carrito
    const IntroducirAlCarrito = (objeto) => {
      setObjetos([...objetos, objeto]);
      setTotal(total + objeto.precio);
    };
  
    // Función para eliminar un elemento del carrito
    const BorrarDelCarrito = (index) => {
      const nuevoObjeto = [...objetos];
      const borrarObjeto = nuevoObjeto.splice(index, 1)[0];
      setObjetos(nuevoObjeto);
      setTotal(total - borrarObjeto.precio);
    };
  
    return (
      <div>
        <h1>Carrito de la compra</h1>
        <ul>
          {objetos.map((objeto, index) => (
            <li key={index}>
              {objeto.nombre} - ${objeto.precio}
              <button onClick={() => BorrarDelCarrito(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${total}</h2>
        <h3>Agregar artículos:</h3>
  
        <button onClick={() => IntroducirAlCarrito({  })}>Agregar Producto {{nombre}}</button>
      </div>
    );
  };
  
  export default CarritoCompra;
  