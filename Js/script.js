const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100) + 1;
let numOfGuess = 0;
let guessNo = [];


function play() {
    let userGuess = document.getElementById("guess").value;

    if (userGuess > 100 || userGuess < 1) {
        alert("Guess the Number between 1 to 100")
    } else {
        numOfGuess++
        guessNo.push(userGuess)

        if (userGuess > answer) {
            message1.textContent = `No. Of Guesses: ${numOfGuess}`
            message2.textContent = `Guessed Numbers are : ${guessNo}`
            message3.textContent = "Your guess is too hign"
        }else if(userGuess < answer){
            message1.textContent = `No. Of Guesses: ${numOfGuess}`
            message2.textContent = `Guessed Numbers are : ${guessNo}`
            message3.textContent = "Your guess is too low"
        }else if(userGuess == answer){
            message3.textContent = "Yippie You Win !!"
            message1.textContent = `The number was : ${answer}`
            message2.textContent = `You guessed it in ${numOfGuess} guesses`
            document.getElementById("my_btn").disabled = true
        }
    }


}