

const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Human"];

let careerIndex = 0;

let charachterIndex = 0;


function updateTest(){
    charachterIndex++
    containerEl.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0, charachterIndex)}</h1>
    `
    if(charachterIndex === careers[careerIndex].length){
        careerIndex++,
        charachterIndex = 0;
    }
    if(charachterIndex === careerIndex.length){
        careerIndex = 0;
    }
    setTimeout(updateTest, 400)
}

updateTest()