const BTNPLAY=document.getElementById("play");
const CONTAINER= document.querySelector(".container")
// dichiaro tasto e container


for( let i = 0; i < 80; i++){
    let box= document.createElement("div");
    CONTAINER.append(box)
    box.classList.add("boxstyle")
}