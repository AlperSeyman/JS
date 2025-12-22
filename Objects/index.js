// objects = A collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object = {key:value,
//                     function()}

// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: ()=>console.log("Hi! I am Spongebob!"),
    sayBye: ()=>console.log("Goodbye!")
}

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