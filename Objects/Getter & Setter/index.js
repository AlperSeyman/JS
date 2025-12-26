// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    get width(){
        return this._width;
    }


    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }
        else{
            console.error("Heigth must be a positive number");
        }
    }
    get height(){
        return this._height
    }

}

const rectangle = new Rectangle(3, 4)
console.log(`Width: ${rectangle.width} Height: ${rectangle.height}`)


class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First Name must be non-empty string");
        }
    }
    get firstName(){
        return this._firstName;
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last Name must be non-empty string");
        }
    }
    get lastName(){
        return this._lastName
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge>=0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negativ number");
        }
    }
    get age(){
        return this._age;
    }
}


const person = new Person("Spongebob", "Squarepants", 30);

console.log(`Firs Name: ${person.firstName} Last Name: ${person.lastName} Age: ${person.age}`)