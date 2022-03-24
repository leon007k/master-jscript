"use strict";

/**
 * ! EJERCICO 1
 * # Realizar un programa que me pida dos numeros e indicar cual es mayor y menor, e indicar si son iguales}
 * # PLUS: Si los numeros son menores o iguales a cero o si el valor ingresado no es un numero, indicar que vuelva a ingresar los numeros
 */

/*var x = parseInt(prompt("Ingresa el primer numero", 0));
var y = parseInt(prompt("Ingresa el segundo numero", 0));

while (x <= 0 || y <= 0 || isNaN(x) || isNaN(y)) {
  x = parseInt(prompt("Ingresa el primer numero", 0));
  y = parseInt(prompt("Ingresa el segundo numero", 0));
}

if (x == y) {
  document.write("Los numeros son iguales");
} else if (x > y) {
  document.write("El numero " + x + " es mayor que " + y);
} else {
  document.write("El numero " + y + " es mayor que " + x);
}*/

/**
 * ! EJERCICIO 2
 * # Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
 * # hasta introducir un numero negativo y ahi mostrar el resultado
 */

/*var sum = 0;
var count = 0;

do {
  var num = parseInt(
    prompt("Ingresa un numero, hasta que este sea menor igual a 0", 0)
  );
  if (isNaN(num)) {
    num = 0;
  } else if (num >= 0) {
    sum += num;
  }
  count++;
} while (num >= 0);

document.write(
  "El resultado de la suma es: " + sum + "<br>la media es: " + sum / count
);*/

/**
 * ! EJERCICO 3
 * # Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario
 */

/*var num1 = parseInt(prompt("Ingresa el primer valor", 0));
var num2 = parseInt(prompt("ingresa el segundo valor", 0));

while (isNaN(num1) || isNaN(num2)) {
  num1 = parseInt(prompt("Primer valor: favor de ingresar un numero", 0));
  num2 = parseInt(prompt("Segundo valor: favor de ingresar un numero", 0));
}

document.write("<p>Los numeros que se encuentran entre " + num1 + " y " + num2 + " son:</p><br>");
for (var i = num1; i <= num2; i++) {
  document.write(i + "<br>");
}*/

/**
 * ! EJERCICIO 4
 * # Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

/*var num1 = parseInt(prompt("Ingresa el primer valor", 0));
var num2 = parseInt(prompt("ingresa el segundo valor", 0));

while (isNaN(num1) || isNaN(num2) || num1 > num2) {
  num1 = parseInt(prompt("Primer valor: favor de ingresar un numero", 0));
  num2 = parseInt(prompt("Segundo valor: favor de ingresar un numero", 0));
}
document.write(
  "<p> Los numeros impares que estan entre " +
    num1 +
    " y " +
    num2 +
    " son: </p><br>"
);
for (var i = num1; i <= num2; i++) {
  if (i % 2 != 0) {
    document.write("el numero " + i + " es impar<br>");
  }
}*/

/**
 * ! EJERCICIO 5
 * # Muestre todos los numeros divisiores de un numero introducido por el usuario
 */

/*var num = parseInt(prompt("Ingresa un numero", 1));

while (isNaN(num) || num <= 0) {
  num = parseInt(prompt("Por favor ingresa numero"), 0);
}

document.write("<p>Los numeros divisores de " + num + " son:</p><br>");
for (var i = 1; i <= num; i++) {
  if (num % i == 0) {
    document.write("el numero " + i + " es divisor<br>");
  }
}*/

/**
 * ! EJERCICIO 6
 * # Mostrar si un numero es impar o par
 * # 1- Ventana que pida el numero
 * # 2.- Si no es valido pedir el numero de nuevo
 */

var num = parseInt(prompt("ingresa un numero", 0));

while (isNaN(num) || num <= 0) {
  num = parseInt(prompt("Por favor ingresa un NUMERO", 0));
}

if (num % 2 == 0) {
  document.write("<p>El numero " + num + " es par");
} else {
  document.write("<p>El numero " + num + " es impar");
}
