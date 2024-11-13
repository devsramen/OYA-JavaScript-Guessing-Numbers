const playerInput1 = document.querySelector("#playerInput1");
const playerInputBtn1 = document.querySelector("#playerInputBtn1");
const errorMessage = document.querySelector("#errorMessage");

const playerInput2 = document.querySelector("#playerInput2");
const playerInputBtn2 = document.querySelector("#playerInputBtn2");
const winner = document.querySelector("#winner");
let chance = document.querySelector("#chance");
let chanceCount = document.querySelector("#chanceCount");
const congratulation = document.querySelector("#congratulation");

let guessingNumber;
let optionNumber = []
let count = 3;

playerInputBtn1.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput1.value))){
        guessingNumber = Number(playerInput1.value)
        // displayControl(event.target)
        playerInput1.style.display = "none";
        playerInputBtn1.style.display = "none";
        errorMessage.style.display = "none";
        playerInput2.style.display = "inline-block";
        playerInputBtn2.style.display = "inline-block";
        chance.style.display = "inline-block";
        chanceCount.innerHTML = count;
        // console.log()
    }else{
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    }    
    console.log(guessingNumber);    
})
playerInputBtn2.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput2.value))){
        if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) < 10){
            optionNumber.push(playerInput2.value)
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput2.value = "";
            console.log(optionNumber)
            chanceCount.innerHTML = count - optionNumber.length
            if(optionNumber.length == count){
                if(optionNumber[0] == guessingNumber || optionNumber[1] == guessingNumber || optionNumber[2] == guessingNumber || optionNumber[3] == guessingNumber || optionNumber[4] == guessingNumber){
                    winner.innerHTML = "Player-2 is Winner"
                    playerInput2.style.display = "none"
                    playerInputBtn2.style.display = "none"
                    chance.style.display = "none";
                    congratulation.style.display = "block";
                }else{
                    playerInput2.style.display = "none"
                    playerInputBtn2.style.display = "none"
                    winner.innerHTML = "Player-1 is Winner"
                    chance.style.display = "none";
                }
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})

