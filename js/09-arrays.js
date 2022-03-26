"use strict";

// # Formas de recorrer un arreglo

var languages = ["PHP", "JavaScript", "MySQL","Java"];

document.write("<h3>Lenguajes de programacion</h3><ul>");
// * Usar un bicle for para recorrer arreglo
document.write("<p>Recorriendo arreglo con bucle for</p><ol>");
for(var i=0; i<languages.length; i++){
  document.write("<li>"+languages[i]+"</li>");
}
document.write("</ol><br><p>Recorriendo arreglo con forEach</p>");

// * Usar un forEach en JavaScript
languages.forEach(element =>{
  document.write("<li>"+element+"</li>");
});
document.write("</ul>");

// * Otra forma de recorrer una array es usando el metodo for in
document.write("<br><p>Recorriendo un array mediante el for in</p><ol>");
for(let prog in languages){
  document.write("<li>"+languages[prog]+"</li>");
}
document.write("</ol>");

// # Agregar o eliminar un elemento del array

// * Agregar un elemento al array
languages.push("Phyton");
console.log(languages);

// * Eliminar o ignorar el ultimo elemento de un array
var element = " ";
/*do {
  element = prompt("Ingresa un lenguaje de programacion");
  languages.push(element);
}while(element != "ACABAR")*/

// @ Este seria un metodo no tan practico
//languages.pop();
// @ Este seria otro metodo mas practico, buscando entre el array la posicion y eliminar exactamente ese
var index = languages.indexOf("ACABAR");
console.log(index);
if(index != -1){
  languages.splice(index,1);
}

document.write("<p>Eliminando ultimo elemento de un array</p><ol>");
for(var i=0; i<languages.length; i++){
  document.write("<li>"+languages[i]+"</li>");
}
document.write("</ol>");

// # Convertir una cadena a array o viceversa

// * convertir un array a cadena de texto
var string_array = languages.join(",");
console.log(string_array);
// * convertir una cadena en un array
var new_array = "hola, que hace, esto es, un array";
var arr = new_array.split(", ");
console.log(arr);

// # Ordenar un arreglo

// * Ordenar un array de forma alfabetica
console.log(languages.sort());
// * Ordenar una array de forma inversa
console.log(languages.reverse());

// # Busqueda dentro de un array

/*var search = languages.find(function(keyword){
  return keyword == "PHP";
});*/
// ! forma mas corta de escribir lo anterior
var search = languages.find(keyword => keyword == "PHP");

// * Para buscar la posicion en la que se encuentra lo que estamos buscando se hace lo sig
search = languages.findIndex(keyword => keyword == "PHP");
console.log(search);