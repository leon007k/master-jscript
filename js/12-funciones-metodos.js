// # Uso del metodo call para las funciones
// * El metodo call puede escribir un metodo que se puede usar en diferentes objetos
// * Un objeto puede usar un metodo que pertenece a otro objeto
let person1 = {
  name: 'John',
  age: 21,
};
let person2 = {
  name: 'Franck',
  age: 22,
};
let sayHi = function(){
  console.log('Hi, ' + this.name);
}
//sayHi.call(person1);

// * tambien podemos agregar un mensaje o parametro extra en el metodo call
let sayHi2 = function(message){
 console.log(message + ' ' + this.name); 
}
//sayHi2.call(person2,'Hi');

// # Uso del metodo apply para las funciones
// * Permite lo misme que la funcion call solo que este a diferencia del call, toma los valores como una matriz
// * mientras que call los toma como una lista por serparado
function introduction(name, profession){
  console.log('My name is ' + name + ' abd I am a ' + profession + '.');
  //console.log(this);
}

//introduction('John','Student');
//introduction.apply(null,['Jhonny','Teacher']);

// # Uso del metodo bind para las funciones
// * permite que un objeto pueda copiar un meoto de otro objeto.
// * con este metodo podemos evitar tener problemas al perder un dato al hacer uso del this
let student = {
  name: 'Mary',
  getName: function(){
    return this.name;
  }
};
let student2 = {
  name: 'John'
};
let getNameCopy = student.getName.bind(student2);
console.log(getNameCopy());