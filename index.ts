#! /user/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;

console.log("\n\tWelcome to the ATM - MACHINE\n");

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin code: ",
            type: "number"
        }
    ]
);
if(pinAnswer.pin === myPin){
    console.log("Pin is correct, login Successfully!");
    console.log("Current Account Balance is ${myBalance}")

    let operationAns = await inquirer.prompt(
        [
            {
              name: "operation",
              message:"Select an operation:",
              type: "list",
              choices : ["withdraw", "checkbalance"]
            }
        ]
    );

    if(operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount to withdraw",
                    type: "number"

            }
        ]
    );
    if (amountAns.amount > myBalance){
        console.log("Insufficient Balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} Withdraw Successfully`);
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else if (operationAns.operation ==="checkbalance"){
    console.log("Your remaing account balance is ${myBalance}");
}
}
   else {
    console.log("Pin is Incorrect, Try Again!");
   }



