function mostrarDOM(elemento, lista = document.createElement('ul')) {
    let objeto = document.createElement('li');
    objeto.textContent = elemento.tagName;
    lista.appendChild(objeto);

    Array.from(elemento.children).forEach((hijo) => {
        mostrarDOM(hijo, objeto.appendChild(document.createElement('ul')));
    });

    return lista;
}

window.onload = function() {
    let html = document.documentElement;
    let resultado = document.getElementById('resultado');
    resultado.appendChild(mostrarDOM(html));
}
