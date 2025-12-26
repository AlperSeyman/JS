// nested objects = Objects inside of other Objects.
//                  Allow you to represent more complex data structures
//                  Child Objects is enclosed by a Parent Object

//                  Person(Addres{}, Contact{})
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    firstName:"Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water",
    }
}

console.log(person.firstName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies)
console.log(person.address)

for (const property in person.address) {
  console.log(person.address[property])
}



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