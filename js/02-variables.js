// # VARIABLES
// * una variable es un contenedor de informacion

// * De esta forma activamos el modo estricto de jscript, siguiendo los estandares de programacion
"use strict";

// ! Diferencia entre let y var
// * let permite definir variables,limitando su alcance al bloque, declaracion o sentencia donde se esta usando
// * Var define una variable global o local sin importar el alcance del bloque

// @ Prueba con variable tipo VAR
var num = 40;
if (true) {
  var num = 50;
  console.log(num);
}
console.log(num);

// @ Prueba con variable tipo LET
let letNum = 40;
if (true) {
  let letNum = 50;
  console.log(letNum);
}
console.log(letNum);

// ! constantes
// * Es una variable que su valor no cambiara
var text = "hola mundo";
const text2 = " que hace";
console.log(text + text2);
text2 = ", esto es una prueba";
// @ esto nos dara error porque una constante no se le puede cambiar su valor
//console.log(text + text2);
