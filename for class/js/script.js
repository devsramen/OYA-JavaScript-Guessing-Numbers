let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton");

let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton");
let error = document.querySelector(".error");
let heading = document.querySelector(".heading");
let span = document.querySelector("span");
let anotherHeading = document.querySelector("h2");
let playerOneNumber;
let count = 5;

playeronebutton.addEventListener("click",function(){    
    if(playeroneinput.value == ""){
        error.innerHTML = "Please give a Number";
    }else{
        if(Number(playeroneinput.value)){
            playerOneNumber = playeroneinput.value;
            error.innerHTML = "";
            displayControl("p2bp1n")
            heading.innerHTML = "Player-2";
            span.innerHTML = count;
            anotherHeading.style.display = "block"
        }else{
            error.innerHTML = "Please give a Number";
        }
    }
})
playertwobutton.addEventListener("click",function(){
    if( count > 0 ){
        if(playertwoinput.value == ""){
            error.innerHTML = "Please give a Number";
        }else{
            if(Number(playertwoinput.value)){
                error.innerHTML = "";
                count--
                span.innerHTML = count;
                if( playerOneNumber == playertwoinput.value ){
                    console.log("Player-2 is Winner");
                }else if(count == 0){
                    console.log("Player-1 is Winner");
                }
            }else{
                error.innerHTML = "Please give a Number";
            }
        }
    }else{
        console.log("Game is Over")
    }
})






















function displayControl(type){
    if(type == "p2bp1n"){
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    }
    else if(type == "p1bp2n"){
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
    }
    else if(type == "p1b"){
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
    } 
    else if(type == "p2b"){
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
    } 
}



















// const playerInput1 = document.querySelector("#playerInput1");
// const playerInputBtn1 = document.querySelector("#playerInputBtn1");
// const errorMessage = document.querySelector("#errorMessage");

// const playerInput2 = document.querySelector("#playerInput2");
// const playerInputBtn2 = document.querySelector("#playerInputBtn2");
// const winner = document.querySelector("#winner");
// let chance = document.querySelector("#chance");
// let chanceCount = document.querySelector("#chanceCount");
// const congratulation = document.querySelector("#congratulation");

// let guessingNumber;
// let optionNumber = []
// let count = 5;

// playerInputBtn1.addEventListener("click",(event)=>{
//     if(Boolean(Number(playerInput1.value))){
//         guessingNumber = Number(playerInput1.value)
//         playerInput1.style.display = "none";
//         playerInputBtn1.style.display = "none";
//         errorMessage.style.display = "none";
//         playerInput2.style.display = "inline-block";
//         playerInputBtn2.style.display = "inline-block";
//         chance.style.display = "inline-block";
//         chanceCount.innerHTML = count;
//     }else{
//         errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
//     }    
//     console.log(guessingNumber);    
// })
// playerInputBtn2.addEventListener("click",(event)=>{
//     if(Boolean(Number(playerInput2.value))){
//         if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) < 10){
//             optionNumber.push(playerInput2.value)
//             errorMessage.style.display = "none"
//             errorMessage.innerHTML = "";
//             playerInput2.value = "";
//             console.log(optionNumber)
//             chanceCount.innerHTML = count - optionNumber.length
//             if(optionNumber.length == count){
//                 if(optionNumber[0] == guessingNumber || optionNumber[1] == guessingNumber || optionNumber[2] == guessingNumber || optionNumber[3] == guessingNumber || optionNumber[4] == guessingNumber){
//                     winner.innerHTML = "Player-2 is Winner"
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     chance.style.display = "none";
//                     congratulation.style.display = "block";
//                 }else{
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     winner.innerHTML = "Player-1 is Winner"
//                     chance.style.display = "none";
//                 }
//             }
//         }else{
//             errorMessage.style.display = "block"
//             errorMessage.innerHTML = "Please Enter a Number between 1-10"
//         }        
//     }else{
//         errorMessage.style.display = "block"
//         errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
//     } 
// })

