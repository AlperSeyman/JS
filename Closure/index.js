// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance.
//           Used frequently in JS frameworks: React, Vue, Angular.

function createCounter(){

    let count = 0;

    function increament(){
        count++;
        console.log(`Count increased to ${count}`)
    }
    function getCount(){
        console.log(`Current count is ${count}`)
    }
    return {increament, getCount}
}

const counter = createCounter(); // createCounter returns objects which contain 2 functions.

counter.increament();
counter.increament();
counter.increament();

counter.getCount();

function createGame(){
        let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return `The final score is ${score}`;
    }

    return {increaseScore, decreaseScore, getScore}
}

let game = createGame(); // createGame returns objects which contain 3 functions.

game.increaseScore(6)
game.increaseScore(7)
game.decreaseScore(5)
console.log(game.getScore())