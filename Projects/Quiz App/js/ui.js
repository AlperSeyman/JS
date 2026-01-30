
function UI(){
    this.quiz_box = document.querySelector("#quiz-box")
    this.body = document.querySelector("#quiz-box #body")
}

UI.prototype.showQuestions = function(question){
    const title = document.createElement("h5")
    title.classList.add("question-title")
    title.textContent = question.questionText;
}


{/* <h5 class="question-title">1 - Which one is a JavaScript package management application? "</h5>
<div class="option-list">
    <div class="option">
        <span>a: Node.js</span>
    </div>
    <div class="option">
        <span>b: Node.js</span>
    </div>
    <div class="option">
        <span>c: Node.js</span>
    </div>
    <div class="option">
        <span>d: Node.js</span>
    </div>
</div> */}