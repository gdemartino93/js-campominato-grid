const BTNPLAY=document.getElementById("play");
const CONTAINER= document.querySelector(".container")
// dichiaro tasto e container

for( let i = 1; i < 101; i++){
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