"use strict";

// # Bucle while
var number = 1;

while (number < 10) {
  console.log("Este es el bucle while de la iteracion: " + number);
  // * Usando la palabra break, podriamos interrumpir un bucle
  if (number == 5) {
    break;
  }
  number++;
}

// # Bucle do while
var num = 1;
do {
  console.log("Esta es el bucle do-while de la iteracion: " + num);
  num++;
} while (num <= 10);
