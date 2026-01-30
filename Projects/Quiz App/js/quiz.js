
function Quiz(questions){
    this.index = 0;
    this.questions = questions;
}

Quiz.prototype.getQuestion = function(){
    return this.questions[this.index];
}

