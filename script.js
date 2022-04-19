'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number'
// document.querySelector('.number').textContent = 13;
// document.querySelector('.guess').value = 12; 

let SecretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20;
document.querySelector('.number').textContent = "?"
console.log(SecretNumber)
document.querySelector('.check').addEventListener('click', function () {
    const guess =  Number(document.querySelector('.guess').value)
    console.log(guess , typeof guess)
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number Entered'
    }
    else if (guess === SecretNumber) {
        document.querySelector('.highscore').textContent = score
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('.number').textContent = SecretNumber
        document.querySelector('body').style.backgroundColor = "green"
    }
    else if (guess > SecretNumber) {
        if (score > 1) {
            document.querySelector('body').style.backgroundColor = "grey"
            document.querySelector('.message').textContent = 'Too High'
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('body').style.backgroundColor = "blue"
            document.querySelector('.message').textContent = 'You Lost The Game'
            document.querySelector('.score').textContent = 0
        }
        
    }
    else {
        if (score > 1) {
            document.querySelector('body').style.backgroundColor = "red"
            document.querySelector('.message').textContent = 'Too Low'
            score--;
            document.querySelector('.score').textContent = score
        }
        else {
            document.querySelector('body').style.backgroundColor = "blue"
            document.querySelector('.message').textContent = 'You Lost The Game'
            document.querySelector('.score').textContent = 0
        }
      
    }
})
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222"
})