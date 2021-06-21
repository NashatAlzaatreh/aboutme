'use strict';

let thename 
thename=prompt("what is your name?");
console.log(thename );
alert("wlcome "+ thename +", now we will start a guess game to know more about me, have fun." )

let q1=prompt("Am I 26 years old? yes or no")

switch ( q1.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, I am 26 years old")
        // console.log("That is true, I am 26 years old")
        break;
    case 'no' :
    case 'n' :
        alert("That is false, I am 26 years old")
        // console.log("That is false, I am 26 years old")
        break;


}

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
        // console.log("That is true, I am civil engineer, and I will be a great software developer")
        break;

}

let q3=prompt("Am I a good chess player? yes or no")

switch ( q3.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, and if you wants we can play a chess game")
        // console.log("That is true, and if you wants we can play a chess game") 
        break;
    case 'no' :
    case 'n' :
        alert("That is false, and if you wants we can play a game")
        // console.log("That is false, and if you wants we can play a game")
        break;

}


let q4=prompt("Am I enjoying software development? yes or no")

switch ( q4.toLowerCase()) {
    case 'yes':
    case 'y' :
        alert("That is true, you are starting to know me ")
        // console.log("That is true, you are starting to know me")
        break;
    case 'no' :
    case 'n' :
        alert("That is false, I said to you I will be a great software developer  ")
        // console.log("That is false, I said to you I will be a great software developer")
        break;

}



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
        // console.log("That is true, I am a good team member, and I am a special team leader")
        break;

}

alert("Thank you " + thename + " for your time, you can read more about me in this page, nice to meet you.")


