let player = {
    name: "Player",
    chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if (player.chips >= 15){
        player.chips = player.chips - 15;
        isAlive = true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        renderGame()
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        document.getElementById("message").textContent = "**Balance Over. No more Play.**"
    }

}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if(player.chips >= 5) {
        if (isAlive === true && hasBlackJack === false) {
            player.chips = player.chips - 5;
            let card = getRandomCard()
            sum += card
            cards.push(card)
            playerEl.textContent = player.name + ": $" + player.chips
            renderGame()        
        }
    } else {
        document.getElementById("message").textContent = "**Balance Over. No more Play.**"
    }

}
