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
//console.log(index);
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
//console.log(string_array);
// * convertir una cadena en un array
var new_array = "hola, que hace, esto es, un array";
var arr = new_array.split(", ");
//console.log(arr);

// # Ordenar un arreglo

// * Ordenar un array de forma alfabetica
//console.log(languages.sort());
// * Ordenar una array de forma inversa
//console.log(languages.reverse());

// # Busqueda dentro de un array

/*var search = languages.find(function(keyword){
  return keyword == "PHP";
});*/
// ! forma mas corta de escribir lo anterior
var search = languages.find(keyword => keyword == "PHP");

// * Para buscar la posicion en la que se encuentra lo que estamos buscando se hace lo sig
search = languages.findIndex(keyword => keyword == "PHP");
//console.log(search);

// * Para buscar un valor acorde a una condicion, podemos hacer uso del some, esto devuelve true o false
var calf = ['10','9','7','6','5','10'];
var aprobado = calf.some(result => result >= '7');
//console.log(aprobado);

// * Para agregar un valor al inicio de un array ocupamos unshift y para quitarlo agramos shift
let num = ['1','2','3','4','5'];
let byenum = num.shift();
//console.log(num, byenum);
//console.log(num.unshift('0'));

// * Para realizar una copia de ciertos valores de un array, el primer valor indica en donde comienza y el segundo donde termina
const val = ['1','2','3','4','5'];
const newValues = val.slice(1, 2);
//console.log(newValues);

// *Para realizar un corte en un array o agregar un valor mas dentro de un array podemos usar splice
// ! Para Eliminar, el primer valor indica donde empieza, el segundo cuantos eliminara apartir del empiezo
let values = ['1','2','3'];
values.splice(1,1);
//console.log(values); // 1 3

// ! Para agregar un elemento mas, el indicador de eliminar lo dejamos cero y agregamos otro valor que seria lo que se agregara al array
let text = ['a','b','c'];
values.splice(1,0,'Hola mundo');
//console.log(values); // a hola mundo b c 

// * forma de copiar un array
let newArr = [1,2,3];
let arr2 = [...newArr];
console.log(newArr);
arr2.push(4);
arr2.unshift(22);
//console.log(arr2);

// * Forma de concatenar un arreglo
let concat = [1,2,3];
let concat2 = [4,5,6];
let allConcat = concat.concat(concat2);

