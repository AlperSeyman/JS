// constructor = special method for defining the properties and methods of objects

// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

//  Constructors
 function Person(firstName, lastName, age)  {
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.isEmployed=false;
    this.sayHello= ()=>console.log("Hi! I am Patrick....");
    this.sayBye= ()=>console.log("Bye....");
}

const person = new Person("test", "nikole", 40)
person.sayHello()