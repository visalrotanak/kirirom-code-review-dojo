"use strict"

// write conde in here

const appleButton = document.getElementById('apple')
const bananaButton = document.getElementById('banana')
const orangeButton = document.getElementById('orange')
const resetButton = document.getElementById('reset')

const textElement = document.getElementById('text')

function ChangeText(text){
    textElement.textContent = text
}


appleButton.addEventListener('click',() => ChangeText("APPLE"))
bananaButton.addEventListener('click',() => ChangeText("BANANA"))
orangeButton.addEventListener('click',() => ChangeText("ORANGE"))
resetButton.addEventListener('click',() => ChangeText("-"))