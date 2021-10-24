var readlineSync=require('readline-sync')

function welcome(){
var userName=readlineSync.question("What is your name? ")
console.log("welcome "+ userName +" Let's see how well you know me!!")
}


var highscore=[
  {
name:"Swetha",
score:5
},
{
  name:"Jyothika",
  score:4
}
]
var score=0
var questionOne={
question:"Where do i live? ",
answer:"Hyderabad"
}
 var questionTwo={
  question:"My favorite dish would be? ",
  answer:"Biryani"
}
var questionThree={
  question:"What is my birth month? ",
  answer:"February"
}
var questionFour={
  question:"How old am i? ",
  answer:"21"
}
var questionFive={
  question:"whats my mother tongue? ",
  answer:"Telugu"
}

var DoUKnowMe=[questionOne,questionTwo,questionThree,questionFour,questionFive];

function play(question,answer){
  var res=answer.toLowerCase();
  var userAnswer=readlineSync.question(question)
  if(userAnswer===res){
     score++
    console.log("your are right!!")
    console.log("current score: "+score) 
  }else{
    console.log("your are worng !!")
    console.log("current score: "+score)
  }
}

function yourPlay(){
for(var i=0;i<DoUKnowMe.length;i++){
play(DoUKnowMe[i].question,DoUKnowMe[i].answer)
console.log("--------------------------")
}
}

function highScoreOfPlayers(){
console.log("YAY! You Scored:"+score)
console.log("Check out the high scores, if you should be there ping me and i'll update it")
for(var i=0;i<highscore.length;i++){
  console.log(highscore[i].name,":" ,highscore[i].score)
}
}

welcome()
yourPlay()
highScoreOfPlayers()