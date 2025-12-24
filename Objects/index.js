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


class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;

    }
    displayProduct(){
        console.log(`Name: ${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.hello()
product1.displayProduct()

const total = product1.calculateTotal(salesTax)
console.log(`Total price (with tax): $${total.toFixed(2)}`);



