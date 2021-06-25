'use strict';

let thename;
let score =0; 
thename=prompt("what is your name?");
console.log(thename );
alert("wlcome "+ thename +", now we will start a guess game to know more about me, have fun." )
function fun1 () {
let q1=prompt("Am I 26 years old? yes or no")

switch ( q1.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, I am 26 years old")
        score++;
        // console.log("That is true, I am 26 years old")
        break;
    case 'no' :
    case 'n' :
        alert("That is false, I am 26 years old")
        // console.log("That is false, I am 26 years old")
        break;


}
}
fun1();

function fun2 (){
let q2=prompt("Am I a Software engineer? yes or no")

switch ( q2.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is false, I am civil engineer, and I will be a great software developer")
        // console.log("That is false, I am civil engineer, and I will be a great software developer")
        break;
    case 'no' :
    case 'n' :
        alert("That is true, I am civil engineer, and I will be a great software developer")
        score++;
        // console.log("That is true, I am civil engineer, and I will be a great software developer")
        break;
}
}
fun2();

function fun3(){
let q3=prompt("Am I a good chess player? yes or no")

switch ( q3.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, and if you wants we can play a chess game")
        score++;
        // console.log("That is true, and if you wants we can play a chess game") 
        break;
    case 'no' :
    case 'n' :
        alert("That is false, and if you wants we can play a game")
        // console.log("That is false, and if you wants we can play a game")
        break;
}
}
fun3();

function fun4(){
let q4=prompt("Am I enjoying software development? yes or no")

switch ( q4.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, you are starting to know me ")
        score++;
        // console.log("That is true, you are starting to know me")
        break;
    case 'no' :
    case 'n' :
        alert("That is false, I said to you I will be a great software developer  ")
        // console.log("That is false, I said to you I will be a great software developer")
        break;
}
}
fun4();


function fun5(){
let q5=prompt("Am I hate team work? yes or no")

switch ( q5.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is false, I am a good team member, and I am a special team leader")
        // console.log("That is false, I am a good team member, and I am a special team leader") 
        break;
    case 'no' :
    case 'n' :
        alert("That is true, I am a good team member, and I am a special team leader")
        score++;
        // console.log("That is true, I am a good team member, and I am a special team leader")
        break;
}
}
fun5();

function fun6(){
alert("Now you have to guess a number and you have four opportunities to get the correct answer, and I will till you in each one if your guess was high or low or correct")
let q6= prompt("what is the year I was borned in?","hint: the answer is between 1990 and 1999");
for (let i = 0 ; i <= 3 ; i++ ) {
    if (q6 == 1995 ){
      alert( "Yes, that is the answer 1995 ")
      score++;
      break;
    }
    else if (i==3){
        alert ( "you did not guess the true answer, the answer is 1995 ")
        break;

    }
    else if (q6 > 1995 ){
      q6=prompt("your answer is wrong, and high, try again to guess the answer");
    //   continue;
    }
    else if (q6 < 1995){
      q6=prompt("your answer is wrong, and low, try again to guess the answer");
      //continue;
    }
       

}
}
fun6();

function fun7(){
alert("a second guess game: you have to guess a number from a groub of numbers between 0 and 30, the group contain seven number you should guess one of them , and you have six attempts to get the correct answer")

let thenum = [2, 7, 14, 16, 17, 22, 29];
let q7= prompt("what is the number?","hint: the answer is between 0 and 30");
let y=0;

for (let i = 0 ; i <= 5 ; i++ )
{
        for (let x = 0; x < 7; x++)
        {

           if (q7 == thenum[x] ){
              alert( "Yes, that is one of the answers the groub of the true answers was (2, 7, 14, 16, 17, 22, 29) ");
              score++;
              y=1;
              break;
            } 
        }  

    if (y==1)
    {
        break;
    }    

    if (i==5)
    {
         alert ( "you did not guess the true answer, the groub of the true answers was (2, 7, 14, 16, 17, 22, 29) ");
         break;
    
    }

    else
     {
        q7= prompt("your answer is wrong, try again to guess the answer ","hint: the answer is between 0 and 30");
        
    }
        

}
}
fun7();

alert("Thank you " + thename + " for your time, you can read more about me in this page, your score is " + score + "  out of 7, nice to meet you.")


