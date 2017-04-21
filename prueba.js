function holaMundo(nombre) {
    return "Hola mundo " + nombre;
}
var nombre = "Alberto Robles";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
// Variables y tipos
var nombre = "Alberto";
var edad = 23;
var programador = true;
var lengs = ["PHP", "Javascript", "CSS"];
etiqueta.innerHTML = nombre + " - " + edad;
