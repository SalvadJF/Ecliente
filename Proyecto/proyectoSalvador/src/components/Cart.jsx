import { useState } from 'react';

function Cart() {
  // Estado del carrito de compras
  const [cartItems, setCartItems] = useState([]);

  // Función para agregar un elemento al carrito
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Función para eliminar un elemento del carrito
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
