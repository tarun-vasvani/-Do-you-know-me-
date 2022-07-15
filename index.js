// ex13 and ex14

var readlineSync = require('readline-sync');

var score = 0; 

var userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName + " to Tarun's Quiz!!!")

var confirming = readlineSync.question("Do you know Tarun? ")
if (confirming === "yes"){
  console.log("Be ready to prove ! ")
  console.log("--------------")
}else{
  console.log("Sorry! try again...")
}




function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer) {
    console.log("Right!")
    score = score + 1;
    console.log("Current score : " + score)
  }else{
    console.log("Wrong!")
    console.log("current score : "+ score);
  }
  
  console.log("---------------")
 
}

 
var questions = [{
  "question" : "When is my birthday ",
  "answer" : "8 oct",
},{
  "question" : "How many siblings do i have? ",
  "answer" : "0",
},{
 "question" : "Where do i live? ",
  "answer" : "lucknow"
}, {
  "question" : "Who is my favourite superhero? ",
  "answer" : "ragner",
}, {
  "question" : "Guess my favourite colour! ",
  "answer" : "black"}];

 for (var i = 0; i<questions.length; i++){
   var currentQuestions = questions[i];
   play(currentQuestions.question, currentQuestions.answer)
 }


console.log("Your final score is : " + score)