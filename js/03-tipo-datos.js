"use strict";

// # Convertir una cadena de numero a numero
var num = "33";
var bool = true;
var float = 33.4;
var convert = num + 3;
console.log(convert);

// @ convertimos la cadena a numero con la funcion Number
convert = Number(num) + 3;
console.log(convert);

// @ convertimos la cadena a numero con la funcion parseInt
convert = parseInt(num) + 3;
console.log(convert);

// @ convertimos la cadena a numero con la funcion parteFloat
num = "33.3";
convert = parseFloat(num) + 3;
console.log(convert);

// @ convertimos un numero a cadena con la funcion String
var number = 33;
convert = String(number) + " Perritos a vender";
console.log(convert);

// @ con el typeof podremos saber el tipo de dato que es la variable
console.log(typeof number, typeof float, typeof num, typeof bool);
