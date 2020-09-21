let count = 0;
const GOAL1 = document.querySelector("#teamone-numgoals");
const GOAL2 = document.querySelector("#teamtwo-numgoals");
const shotcount = document.querySelector("#teamone-numshots");
const counterButton = document.querySelector("#teamone-shoot-button");
counterButton.addEventListener("click", function () {

    console.log("Shot taken")
    // let team1goal =
    let countervalue = Number(shotcount.innerHTML) + 1;
    shotcount.innerHTML = countervalue;
    var d = Math.random();
if (d < 0.5){
    console.log("hey")
    let GOAL1Add = Number(GOAL1.innerHTML) + 1;
    GOAL1.innerHTML = GOAL1Add;

}

})


let shotcounter2 = 0;
const shot2count = document.querySelector("#teamtwo-numshots");
const counterButton2 = document.querySelector("#teamtwo-shoot-button");
counterButton2.addEventListener("click", function () {

    console.log("team2Shot taken")
    let countervalue = Number(shot2count.innerHTML) + 1;
    shot2count.innerHTML = countervalue;
    var d = Math.random();
    if (d < 0.5){
        console.log("hey")
        let GOAL2Add = Number(GOAL2.innerHTML) + 1;
        GOAL2.innerHTML = GOAL2Add;
    }
})

let reset = 0;
const numberofresets = document.querySelector("#num-resets");
const resetbutton = document.querySelector("#reset-button");
resetbutton.addEventListener("click", function () {

    console.log("reset score")
    let countervalue = Number(numberofresets.innerHTML) + 1;
    numberofresets.innerHTML = countervalue;
    shot2count.innerHTML = 0;
    shotcount.innerHTML = 0;
    GOAL1.innerHTML = 0;
    GOAL2.innerHTML = 0;

})
