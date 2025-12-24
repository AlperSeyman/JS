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



// constructor = special method for defining the properties and methods of objects
// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

//  Constructors
// function Person(firstName, lastName, age)  {
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.age=age;
//     this.isEmployed=false;
//     this.sayHello= ()=>console.log("Hi! I am Patrick....");
//     this.sayBye= ()=>console.log("Bye....");
// }

// const person = new Person("test", "nikole", 40)
// person.sayHello()




// class = (ES6 feature) provides a more structured and cleaner way to
//          work with objects compored to traditional constructor function
//          ex. static keyword, encapsulation, inheritance


// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;

//     }
//     displayProduct(){
//         console.log(`Name: ${this.name}`)
//         console.log(`Price: $${this.price.toFixed(2)}`)
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax)
//     }
// }

// const salesTax = 0.05;


// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct()

// const total = product1.calculateTotal(salesTax)
// console.log(`Total price (with tax): $${total.toFixed(2)}`);


// static = keyword that defines properties or methods that belong to a class itself
//          rather than the objects created from that class (class own anything StaticRange, not the objects)
//          belongs to class


// class MathUtil{
//     static PI = 3.14;

//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
//     static getArea(radius){
//         return this.PI * radius * radius
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));




class User{

    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my username is ${this.username}`)
    }
}



const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

User.getUserCount()