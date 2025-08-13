divSaludo = document.getElementById("miDiv");
conbotonSaludar = document.getElementById("botonSaludar");

divSaludo.addEventListener("click", function() {
    alert('Hola! Soy el div');
});

botonSaludar.addEventListener("click", function(event) {
    event.stopPropagation();
    alert('Hola!');
});
