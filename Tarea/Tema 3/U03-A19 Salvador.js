function cambiarColor() {

    var campoColor = document.getElementById('color');
    var colorin;

    if (campoColor.selectedIndex === 0) {
        
        colorin = 'green';
    } else {
        colorin = 'blue';
    }

    var campoFrame = document.getElementById('marcos');

    if (campoFrame.selectedIndex === 0) {

        parent.frames['Marco1'].document.body.style.backgroundColor = colorin;
    } else {
        parent.frames['Marco2'].document.body.style.backgroundColor = colorin;
    }
}
