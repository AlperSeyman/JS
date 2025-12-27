
// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as string

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort()

let numbers = [10, 2, 4, 5, 6, 34, 67, 3, 1, 9]
numbers.sort((a, b)=>{
    return a - b
})

const people = [{name:"SpongeBob", age:30, gpa:3.0},
                {name:"Patrick", age:37, gpa:1.5},
                {name:"Squidward", age:51, gpa:2.5},
                {name:"Sandy", age:27, gpa:4.0}]

people.sort((a, b)=>{
    return a.age - b.age
})