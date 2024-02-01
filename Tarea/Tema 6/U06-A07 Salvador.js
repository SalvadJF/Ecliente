// Función para mostrar el DOM en el contenedor
function displayDOM() {
    // Obtener el elemento raíz del DOM (document)
    var rootNode = document;

    // Llamar a la función recursiva para construir la representación del árbol DOM
    var domTree = buildDOMTree(rootNode);

    // Mostrar el resultado en el contenedor
    var domViewer = document.getElementById("domViewer");
    domViewer.innerHTML = domTree;
}

// Función recursiva para construir la representación del árbol DOM
function buildDOMTree(node) {
    var result = '<ul>';
    result += '<li>' + getNodeString(node) + '</li>';
    
    // Recorrer los nodos hijos
    for (var i = 0; i < node.children.length; i++) {
        result += buildDOMTree(node.children[i]);
    }

    result += '</ul>';
    return result;
}

// Función para obtener la cadena que representa un nodo del DOM
function getNodeString(node) {
    var nodeString = node.nodeName;

    // Agregar el ID si existe
    if (node.id) {
        nodeString += ' (id: ' + node.id + ')';
    }

    // Agregar las clases si existen
    if (node.classList.length > 0) {
        nodeString += ' (class: ' + Array.from(node.classList).join(', ') + ')';
    }

    return nodeString;
}

// Llamar a la función al cargar la página
window.onload = displayDOM;