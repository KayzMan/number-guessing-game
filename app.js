let inputBox = document.querySelector('#inputBox')
let checkBtn = document.querySelector('#btn')
let replayBtn = document.querySelector('#replay')
let resultParaLabel = document.querySelector('#resultLabel')
let attemptsLabel = document.querySelector('#attempts')
let attempts, randomNumber, gameOver = false

function initializeGame(){
    // generate random number between 1 and 100
    randomNumber = Math.floor(Math.random() * 100 + 1)

    // make the hint label display default text
    resultParaLabel.innerHTML = "hint:"
    resultParaLabel.style.color = "white"
    inputBox.value = 0

    // keep count of tries
    attempts = 3
    attemptsLabel.innerHTML = "Lives: ❤️ ❤️ ❤️ ❤️ ❤️️"

    gameOver = false
}

// initialize the game
initializeGame()

replayBtn.addEventListener('click', initializeGame)

checkBtn.addEventListener('click', () =>
{
    let userGuess = inputBox.value
    resultParaLabel.style.color = "white"

    if(!gameOver){
        console.log(randomNumber)
        console.log(attempts)

        // draw the number of lives left
        drawHearts()

        if(attempts <= -1){
            resultParaLabel.innerHTML = "Ran out of Lives 💔"
        }
        // check if input is valid
        else if(Number(userGuess) === 0){
            resultParaLabel.innerHTML = "Enter valid number! 🥴"
            resultParaLabel.style.color = "orange"
        }
        // compare guess and user value, and display appropriate hint or result
        else if(randomNumber === Number(userGuess)){
            resultParaLabel.innerHTML = "You Guessed Right! 😎"
            resultParaLabel.style.color = "#00ff00"
            gameOver = true
        }else if(userGuess < randomNumber){
            drawHearts()
            resultParaLabel.innerHTML = "hint: guess higher than that 😝"
            attempts -= 1
        }else if(userGuess > randomNumber){
            drawHearts()
            resultParaLabel.innerHTML = "hint: guess lower than that 😝"
            attempts -= 1
        }
    }
})

drawHearts = () => {
    attemptsLabel.innerHTML = "Lives: "
    for(let i = 0; i <= attempts; i++)
        attemptsLabel.innerHTML += "❤️ "
}