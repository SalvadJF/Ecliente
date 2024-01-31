document.addEventListener('DOMContentLoaded', function() {
    function displayDOM(node, arbolDOM) {
        var nodeName = node.nodeName;
        var nodeType = node.nodeType;
        var nodeValue = node.nodeValue;

        if (nodeType == Node.ELEMENT_NODE) {
            var span = document.createElement('span');
            span.className = 'node';
            span.textContent = nodeName;
            arbolDOM.appendChild(span);

            if (node.hasChildNodes()) {
                var childNodes = node.childNodes;
                for (var i = 0; i < childNodes.length; i++) {
                    displayDOM(childNodes[i], arbolDOM);
                }
            }
        } else if (nodeType == Node.TEXT_NODE) {
            var span = document.createElement('span');
            span.className = 'node';
            span.textContent = nodeValue;
            arbolDOM.appendChild(span);
        }
    }

    var body = document.getElementsByTagName('body')[0];
    displayDOM(body, document.getElementById('arbolDOM'));
});