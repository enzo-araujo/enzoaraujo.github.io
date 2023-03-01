
function ocultarExtra() {
    document.getElementById('otrosExtra').style.display = 'none';
    document.getElementById('botonExtra').style.display = 'block';
}

function mostrarExtra() {
    document.getElementById('otrosExtra').style.display = 'block';
    document.getElementById('botonExtra').style.display = 'none';
    document.getElementsByClassName("otrosExtra")[0].className = "otrosExtraa";
}