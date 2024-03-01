import { useState } from 'react';


const ShoppingCart = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);
  
    // Función para agregar un elemento al carrito
    const addItemToCart = (item) => {
      setItems([...items, item]);
      setTotal(total + item.price);
    };
  
    // Función para eliminar un elemento del carrito
    const removeItemFromCart = (index) => {
      const newItems = [...items];
      const removedItem = newItems.splice(index, 1)[0];
      setItems(newItems);
      setTotal(total - removedItem.price);
    };
  
    return (
      <div>
        <h1>Carrito de la compra</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h2>Total: ${total}</h2>
        <h3>Agregar artículos:</h3>
        <button onClick={() => addItemToCart({ name: 'Producto 1', price: 10 })}>Agregar Producto 1</button>
        <button onClick={() => addItemToCart({ name: 'Producto 2', price: 15 })}>Agregar Producto 2</button>
        <button onClick={() => addItemToCart({ name: 'Producto 3', price: 20 })}>Agregar Producto 3</button>
      </div>
    );
  };
  
  export default ShoppingCart;
  