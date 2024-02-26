import { useState, useEffect } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);
  const [inputSegundos, setInputSegundos] = useState("");
  const [comenzado, setComenzado] = useState(false);
  const [acabado, setAcabado] = useState(false);

  useEffect(() => {
    let intervalo;

    if (comenzado && segundos > 0) {
      intervalo = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos - 1);
      }, 1000);
    } else if (segundos === 0) {
      setComenzado(false);
      setAcabado(true);
    }

    return () => clearInterval(intervalo);
  }, [comenzado, segundos]);

  const comenzarContador = () => {
    setComenzado(true);
    setSegundos(parseInt(inputSegundos));
  };

  const reiniciar = () => {
    setComenzado(false);
    setAcabado(false);
    setInputSegundos("");
    setSegundos(0);
  };

  const inicio = () => (
    <div>
      <input
        type="number"
        placeholder="Introduce los segundos"
        value={inputSegundos}
        onChange={(e) => setInputSegundos(e.target.value)}
      />
      <button onClick={comenzarContador}>Comenzar</button>
    </div>
  );

  const funcionamiento = () => (
    <div>
      <p>Countdown: {segundos} segundos</p>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );

  const terminado = () => (
    <div>
      <p>Se acabo el tiempo</p>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );

  return (
    <div>
      {!comenzado && !acabado && inicio()}
      {comenzado && !acabado && funcionamiento()}
      {!comenzado && acabado && terminado()}
    </div>
  );
};

export default Temporizador;
