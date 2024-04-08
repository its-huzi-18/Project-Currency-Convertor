#! /usr/bin/env node
import inquirer from "inquirer";
const currencyData = {
    USD: 1, //base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 83.249,
    PKR: 277.730,
    BDT: 109.754,
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "BDT"],
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "BDT"],
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your Amount"
    }
]);
let fromAmount = currencyData[userAnswer.From];
let toAmount = currencyData[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; // exchange rate
let convertedAmount = baseAmount * toAmount; //exchange rate
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
console.log("Result =", convertedAmount.toFixed(3)); // decrease value after decimal 
