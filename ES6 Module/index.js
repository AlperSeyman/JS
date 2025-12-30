// ES6 Module = An external file that contains resuable code
//              that be imported into othet JavaScprict files.
//              Write resuable code for many different apps.
//              Can contain variables, classes, function .. and more


import {PI, getCircumference, getArea} from './mathUtils.js'

console.log(PI)

const circumference = getCircumference(10)
const area = getArea(10)

console.log(`${circumference} cm`)
console.log(`${area} cm`)