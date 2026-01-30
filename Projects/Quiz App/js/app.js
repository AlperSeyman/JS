
const questionList = [
    new Question(" 1 - Which one is a JavaScript package management application? ", {a : "Node.js", b : "Typescript", c : "Nuget", d : 'Npm'}, "d"),
    new Question(" 2 - Which of these is not considered within the scope of Frontend development? ", {a : "Node.js", b : "Typescript", c : "Nuget", d : 'Npm'}, "d"),
    new Question(" 3 - Which of these is not considered within the scope of Backend development? ", {a : "Node.js", b : "Typescript", c : "React", d : 'Angular'}, "a"),
    new Question(" 4 - Which one does not use the Javascript programming language? ", {a : "React", b : "Angular", c : "Vuejs", d : 'ASP.NET'}, "d"),
];


const quiz = new Quiz(questionList);


document.getElementById("getQuestion").addEventListener("click", function(){

    if (quiz.index >= quiz.questions.length){
        console.log("There is no enough question")
    }else{
        console.log(quiz.getQuestion())
        quiz.index++
    }


})