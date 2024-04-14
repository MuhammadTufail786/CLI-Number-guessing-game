#! /usr/bin/env node

import inquirer from "inquirer"

// 1} computer will a generete random number

// 2} user input guessing number

// 3} compaer user input with computer gerereted and sow result

const randomNumber = Math.floor(Math.random() * 10);


const answer = await inquirer.prompt ([{


name: "userGuessesdNumber",
type: "number",
message:"please guess the number between 1-6",


}]);

if (answer.userGuessesdNumber === randomNumber){
    console.log("congratulatiom! you guess right number.");}
    else {
        console.log("you guess wrong number");}

    