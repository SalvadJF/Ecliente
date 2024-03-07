import React from "react";
import facturasJson from "./Facturas.json";

const Recibos = () => {
  const facturas = facturasJson.facturas.factura;

  return (
    <div className="facturaCarrito">
      <h1>Facturas en la Base de Datos</h1>
      <ul className="listaRecibos">
        {facturas.map((factura) => (
          <li key={factura.id}>
            <p className="cabeceraRecibo">Factura Nº: {factura.id}</p>
            <p>Total: {factura.total}€</p>
            <p>Artículos: {factura.articulos.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recibos;
