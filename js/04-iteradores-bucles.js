"use strict";

// # Switch
// ! si queremos declarar una misma variable en un switch tendriamos que hacerlo por bloquest
// * Ejemplo con error
/*let value = 1;
switch (value){
  case 1:
    let message = "el valor es 1";
    console.log(message);
  break;
  case 2: 
   let message = "el valor es 2";
   console.log(message);
  break;
}*/
// * Ejemplo para usarlo por bloques
let value = 1;
switch (value){
  case 1: {
    let message = "el valor es 1";
    console.log(message);
  break;
  }
  case 2: { 
   let message = "el valor es 2";
   console.log(message);
  break;
  }
}

// # diferencia entre el ciclo for/in y for/of
// * El ciclo for/in permite retornar el valor y el objeto de un array mientras que el for/of solo retornara el valor
let product = [
  {
    "ID": 1,
    "Nombre": "Sandalias Nike Jordan Air",
    "Precio": "599.00",
    "Descripcion": "Sandalias con colchon para el reposo de los pies"
  },
  {
    "ID": 2,
    "Nombre": "Sandalias Adidas",
    "Precio": "499.00",
    "Descripcion": "Sandalias con colchon para el reposo de los pies"
  }
];

for(let elemt in product) {
  console.log("'" + elemt + "'=" + product[elemt]);
}

for(let content of product) {
  console.log(JSON.stringify(content));
}

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
