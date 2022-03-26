"use strict";

// # Parametros REST y SPREAD

/**
 * * El parametro REST se usa en una funcion, cuando no se conoce cuantos parametros mas recibira esta funcion
 */
function CoctelFrutas(fruta1, fruta2, ...resto_frutas){
  document.write("<p>fruta 1: " + fruta1 + "<br> fruta 2: " + fruta2 + "<br></p>");
  // * .join permite que el contenido de un array se muestre como string, separados por el parametro que indiquemos
  document.write("<pre>" + resto_frutas.join(",") + "</pre>");
}

/**
 * * El parametro SPREAD se usa cuando tenemos una coleccion de elementos(array) y pasarselo a una funcion
 * * para que los valores los tome como cada uno de los parametros que espere la funcion
 */

var frutas = ["Naranja","Piña"];
CoctelFrutas(...frutas, "sandia","melon","guanabana");

// # CallBack 

/**
 * * Es aquella que es pasada como argumento a otra funcion para que sea "llamada de nuevo" en un momento posterior
 */
function sumar(num1, num2, versuma, sumarpordos){
  var sum = num1 + num2;
  versuma(sum);
  sumarpordos(sum);
  return sum;
}

sumar(32,12, function(value){
  document.write("<p>El resultado de la suma es: " + value + "</p>");
}, res => {
  document.write("<p>El resultado de la suma por dos es: " + (res*2) + "</p>");
});

// @ .toString, permite convertir un valor de tipo entero a cadena


