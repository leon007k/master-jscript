// # Uso de la propiedad Object
// * Cambio de propiedades a un objeto con la propiedad Object
let person = {
  firstName: 'John',
  lastName: 'Copper',
  age: 29,
};

//let obj = Object.getOwnPropertyDescriptor(person, 'firstName');
//obj = Object.defineProperty(person, 'firstName',{writable: false});
//person.firstName = 'Hola';
//console.log(obj);

// * Crear una propiedad con GET y SET para nombre completo
let fullName = Object.defineProperty(person, 'fullName',
  {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
      var nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  }
);

person.fullName = 'Carlos Andrade';
//console.log(person.fullName);

// * agregar una propiedad mas dentro de un constructor
/*function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}*/

Person.prototype.age = 29;
let Jim = new Person('Jim','Cooper');
let Ann = new Person('Ann','Copper');
Jim.age = 18;
//console.log(Ann.age);
//console.log(Jim.age);

// * Crear una herencia de propiedades
function Person(firstName, lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  Object.defineProperty(this, 'fullname',{
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    enumerable: true
  });
}

function Student(firstName,lastName,age){
  Person.call(this,firstName,lastName,age);
  this._enrolledCourses = [];
  
  this.enroll = function(CourseID){
    this._enrolledCourses.push(CourseID);
  };

  this.getCourses = function(){
    return this.fullname + "'s enrolled courses are: " + this._enrolledCourses.join(", ");
  };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let jim = new Student('Jim','Copper','23');
jim.enroll('CS205');
jim.enroll('MA101');
jim.enroll('PS102');

console.log(jim.getCourses());