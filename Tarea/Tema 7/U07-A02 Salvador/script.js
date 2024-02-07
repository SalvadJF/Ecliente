async function consejo(){

  const  requestURL = './consultaC.php';
  const  request = new Request(requestURL);

  const respuesta = await fetch(request);
  const texto     = await respuesta.text();

  const sugerencias = JSON.parse(texto);

}