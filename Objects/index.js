// objects = A collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object = {key:value,
//                     function()}


// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: ()=>console.log("Hi! I am Spongebob!"),
//     sayBye: ()=>console.log("Goodbye!")
// }







// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child) helps with code reusability.

// super = keyword is used in classes to call the constructor or access the properties and methods
        //    of a parent (superclass)
        //    this = this object
        //    super = parent

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`The ${this.name} moves at a speed of ${speed} mph`)
//     }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name,age)
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`This ${this.name} can run`)
//         super.move(this.runSpeed)
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age)
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`This ${this.name} can swim`)
//         super.move(this.swimSpeed)
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age)
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`This ${this.name} can fly`)
//         super.move(this.flySpeed)
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);

// rabbit.run()




// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width=width;
//         this.height=height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }
//     get width(){
//         return this._width;
//     }


//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Heigth must be a positive number");
//         }
//     }
//     get height(){
//         return this._height
//     }

// }

// const rectangle = new Rectangle(3, 4)
// console.log(`Width: ${rectangle.width} Height: ${rectangle.height}`)


// class Person{

//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("First Name must be non-empty string");
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("Last Name must be non-empty string");
//         }
//     }
//     get lastName(){
//         return this._lastName
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge>=0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be a non-negativ number");
//         }
//     }
//     get age(){
//         return this._age;
//     }
// }


// const person = new Person("Spongebob", "Squarepants", 30);

// console.log(`Firs Name: ${person.firstName} Last Name: ${person.lastName} Age: ${person.age}`)



// destructuring = extract values from arrays and objects, then assign
//                 them to variables in a conveient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// ----------- Example 1 -----------
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a,b] = [b,a];


// ----------- Example 2 -----------
// SWAP 2 ELEMENTS IN ARRAY

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]]


// ----------- Example 3 -----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor)
// console.log(secondColor)
// console.log(thirdColor)
// console.log(extraColors)


// ----------- Example 4 -----------
// EXTRACT VALUES FROM OBJECTS and DESTRUCTURE IN FUNCTION PARAMETERS

// const person1 = {
//     firstName:"Spongebob",
//     lastName:"SquarePants",
//     age:30,
//     job:"Fry Cook",
// }

// const person2 = {
//     firstName:"Patrick",
//     lastName:"Star",
//     age:34,
// }

// const {firstName, lastName, age, job="Unemployed"} = person2;
// console.log(firstName)
// console.log(lastName)
// console.log(age)
// console.log(job)

// function displayPerson({firstName, lastName, age, job="Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`)
//     console.log(`age: ${age}`)
//     console.log(`job: ${job}`)
// }

// displayPerson(person2)


// nested objects = Objects inside of other Objects.
//                  Allow you to represent more complex data structures
//                  Child Objects is enclosed by a Parent Object

//                  Person(Addres{}, Contact{})
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     firstName:"Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// console.log(person.firstName)
// console.log(person.age)
// console.log(person.isStudent)
// console.log(person.hobbies)
// console.log(person.address)

// for (const property in person.address) {
//   console.log(person.address[property])
// }



class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country
    }
}

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Water")
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Water")
const person3 = new Person("Squidward", 30, "126 Conch St.", "Bikini Bottom", "Int. Water")

console.log(person1.address.street)