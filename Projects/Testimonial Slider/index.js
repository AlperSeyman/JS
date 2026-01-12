

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const nameEl = document.querySelector(".userName")


const testimonials = [
    {
        name:"Nico S.",
        photoUrl:"https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "I am thoroughly impressed with Wissen's API.Their innovative approach and seamless integration have truly streamlined our processes.The level of efficiency that their product brings is truly remarkable. Thank you, Wissen, for helping us reach our goals effortlessly."
    },
    {
        name:"Mike P.",
        photoUrl:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Wissen's API is absolutely fantastic. It's like the apple of my eye when it comes to streamlining our processes. Thank you for creating such innovative solutions!"
    },
    {
        name:"Jane S.",
        photoUrl:"https://plus.unsplash.com/premium_photo-1664298528358-790433ba0815?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Wissen's API is simply amazing! It seamlessly integrates with our systems, making data retrieval and analysis a breeze. The team at Wissen truly understands our needs and delivers top-notch solutions. I highly recommend Wissen to anyone looking for a reliable partner in tech"
    },
]



let idx = 0;

function updateTestimional(){

    const currentUser = testimonials[idx]

    imgEl.src = currentUser.photoUrl;
    textEl.textContent = currentUser.text
    nameEl.textContent = currentUser.name

    idx++;

    if (idx === testimonials.length){
        idx = 0;
    }

    setTimeout(updateTestimional, 5000);

}

updateTestimional()