"use strict";




let question1 = confirm("Do you want to take part in a small quiz?");

if (question1 == true) {
  alert("Let`s get down to business.");
} else {
  alert("Ah well.");
}

function questionColour() {
let colour = prompt("What is my favourite colour?");

switch (colour.toLowerCase()) {
  case "red":
    alert("My favourite colour is red. Great.");
    break;
  case "green":
    alert("Nice. But I prefer red ");
    break;
  default:
    alert("Pretty sure that colour doesn't exist. Have you thought about red? ");
}
}

function questionFootball(){
let question2 = confirm("What do you think , do I like football?");
if (question2 == true) {
  alert("Great, you get to know me!");} else {
    alert("Wasn`t expecting that!!! ")
  }
}

  function questionLFC(){
  let question3 = confirm("I live in Liverpool , what do you think , do I follow  Liverpool FC ?"); if (question3 == true) {
    alert("Up the Reds!!!");
  } else {
    alert("Ohhh noo , i`m a big fan of them  ");
  }
}

  function questionAnfield(){
  let question4 = confirm("Have you ever been on Anfield?"); if (question4 == true ) { 
    alert("Awesome!!!");
  } else {
    alert("You should go at least once!");
  }
}

  function questionMindGame(){
  let question5 = confirm("Do you wanna play a mind game?");if (question4 == true ) { 
    alert("Good stuff !!!");
  } else {
    alert("You should give it a go!");
  }
}
  
function questionNumbers(){
  let question6 = prompt("I`m thinking of a number between 1 and 100 , can you guess that from 4 attempts? You cand start now with your first attempt!");
  let myNumber = 25;
}
  questionColour();

  questionFootball();

  questionLFC();

  questionAnfield();

  questionMindGame();

  questionNumbers();