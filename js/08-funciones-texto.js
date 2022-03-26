"use strict";

var num = 444;
var text = "Hola que hace hace";
var text2 = " bienvenidos sean ";

// * Convertir un numero a cadena de texto
//document.write("numero a texto: " + num.toString() + "<br>");

// * Convertir una cadena de texto a mayusculas
//document.write("cadena de texto en mayusculas: " + text.toUpperCase() + "<br>");

// * Convertir una cadena de texto a letras minusculas
//document.write("cadena de texto en minisculas: " + text.toLowerCase() + "<br>");

// * Concaquetar una cadena mendiante una funcion
//document.write("cadena de texto concatenada por concat: " + text.concat(" "+text2) + "<br>");}

// # Funciones para buscar dentro de una cadena de texto

// * Permite buscar una palabra, devolviendote la posicion en la que se encuentra. Tomara la primera palabra que encuentre
//document.write(text.indexOf("hace"));
// ! tambien se puede hacer uso de search que hace practicamente lo mismo que indexOf
document.write(text.search("hace<br>"));

// * Permite buscar una palabra devoldiente la posicion en la que se encuentra, toamara la ultima palabra que encuentre
//document.write(text.lastIndexOf("hace"));

// * Cuando en un texto aparecen varias veces una palabra y deseamos obtener todas utilizamos match, que te devuelve un array
// * que contendra todas las palabras, la posicion donde se encuentran y el texto de donde lo obtuvo
//console.log(text.match(/hace/g));

// * substr nos servira para obtener una parte de la cadena apartir de donde le indiquiemos, y cuantos espacios avanzara despues de donde le indiquemos
//console.log(text.substr(9,5));

// * Para obtener una letra en concreto de una cadena podemos hacer uso del charAtt, donde le pasamos como parametro la posicion de la letra
//console.log(text.charAt(12));

// * Buscar si una cadena empieza con determinadas palabras, esto devolvera true
//console.log(text.startsWith("Hola que"));

// * Buscar si una cadena termina con determinadas palabras, esto devolvera false
//console.log(text.startsWith("hace hace"));

// * Buscar una palabra dentro de la cadena y devuelva true o false
//console.log(text.includes("Hola que hace"));

// # Funciones para reemplazar o cortar cadenas de texto

// * Para cortar una cadena y esta empiece a partir del punto indicado, podemos indicar de donde empieza y donde termina
document.write(text.slice(9,13));

// * Para agregar una cadena de texto a un array utilizamos split, podemos indicar como queremos que nos separe la cadena
console.log(text.split(" "));

// * Para quitar los espacios al inicio y final de la cadena
console.log(text2.trim());

// # Uso de plantillas en JavaScript

var fname = prompt("Ingresa tu nombre");
var lname = prompt("Ingresa tu apellido");
var text = `
  <h1>Hola bienvenido</h1>
  <p>${fname} ${lname}, es un gusto tenerte de vuelta</p>
`;
document.write(text);
