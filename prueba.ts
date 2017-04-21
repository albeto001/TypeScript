function holaMundo(nombre){
	return "Hola mundo " + nombre
}
var nombre = "Alberto Robles";
var etiqueta = <HTMLBRElement>document.getElementById("container");
etiqueta.innerHTML=holaMundo(nombre);

// Variables y tipos
var nombre:string = "Alberto";
var edad:number = 23;
var programador:boolean = true;
var lengs:Array<string> = ["PHP", "Javascript", "CSS"];

etiqueta.innerHTML = nombre + " - " + edad; 

alert("HOla");