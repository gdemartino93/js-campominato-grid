const BTNPLAY=document.getElementById("play");
const CONTAINER= document.querySelector(".container");
const SCELTA= document.getElementById("difficult");
// dichiaro tasto play, container e la scelta della difficoltà

let valueDifficult= 0;
// dichiaro valore di difficoltà
if (SCELTA.value == "ez"){
    valueDifficult = 101;
}
if (SCELTA.value == "normal"){
    valueDifficult= 51;
}
if (SCELTA.value == "hard"){
    valueDifficult= 31;
}
// dichiaro tasto e container


for( let i = 1; i < valueDifficult; i++){
    let box= document.createElement("div");
    box.innerHTML=`${i}`
    BTNPLAY.addEventListener("click",
        function(){
            CONTAINER.append(box)
            box.classList.add("boxstyle")
        }
    )
    box.addEventListener("click",
    function(){
        console.log(i)
        this.classList.toggle("active")
    })
}