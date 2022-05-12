"use strict";

/**
 * ! EJERCICIO 1
 * # 1. pedir 6 numeros y agregarlos a un array
 * # 2. Mostrar los elementos del array en el cuerpo de la pagina y la consola
 * # 3. Mostrar el array ordenado
 * # 4.- Invertir el orden y mostrarlo
 * # 5. Mostrar cuantos elementos tiene el array
 * # 6. Busqueda de un valor introducido por el usuario, decirnos si lo encuentra y su indice
 */

// * Paso 1
var arr = [];
for(var i = 1; i <= 6; i++){
  var num = parseInt(prompt("Ingresa un numero"));
  while(isNaN(num)){
    num = parseInt(prompt("de favor ingresa un NUMERO"));
  }
  arr.push(num);
}
// * Paso 2
document.write("<p><b>Array de numeros</b></p><ul>");
for(var i = 0; i < arr.length; i++){
  document.write("<li>" + arr[i] + "</li>");
}
document.write("</ul>")
console.log(arr);

// * Paso 3
document.write("<p><b>Mostrando Array de numeros ordenado</b></p><ul>");
arr.sort();
for(var i = 0; i < arr.length; i++){
  document.write("<li>" + arr[i] + "</li>");
}
document.write("</ul>");

// * Paso 4
document.write("<p><b>Mostrando Array inverso de numeros</b></p><ul>");
arr.reverse();
for(var i = 0; i < arr.length; i++){
  document.write("<li>" + arr[i] + "</li>");
}
document.write("</ul>");

// * Paso 5
document.write("<p>El array tiene " + arr.length + " elementos</p>");

// * Paso 6
var search = parseInt(prompt("Numero a encontrar"));
while( isNaN(search)){
  search =  parseInt(prompt("De favor ingresa un NUMERO a encontrar"));
}

var founded = arr.find(result => result == search);
if(founded){
  var 
}