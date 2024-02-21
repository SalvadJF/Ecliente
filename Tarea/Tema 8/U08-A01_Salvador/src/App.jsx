import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div className="App">
      <h1>Contador de Click</h1>
      <p>Veces que has pulsado el botón: {contador}</p>
      <button onClick={handleClick}>Pulsa aquí</button>
    </div>
  );
}

export default App;
