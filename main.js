// 1 davaleba
// let browser = prompt("What is your browser?")
// if (browser === "edge!") {
//     alert("You've got the Edge")
// } else if (browser === "chrome" || browser === "firefox" || browser === "safari" || browser === "opera") {
//     alert('Okay we support these browsers too')
// } else {
//     alert("We hope that ths page look ok!")
// }

//2 davaleba
// let number1 = prompt("Enter first number")
// let number2 = prompt("Enter second number")
// let operator = prompt("Enter operator")

// let sum = +number1 + +number2
// let sub = +number1 - +number2
// let mul = +number1 * +number2
// let div = +number1 / +number2

// switch (operator) {   
//     case "+":
//         alert(sum);
//         break;
//     case "-":
//         alert(sub);
//         break;
//     case "*":
//         alert(mul);
//         break;
//     case "/":
//         alert(div);
//         break;
//     default: 
//     alert("Invalid operator")
// }

//3 davaleba 

// let number = prompt("Enter a number:");
// while(isNaN(number)){
//     alert("Error, you enterd wrong data")
//     number = prompt("Enter a number again:");
// }
//  alert("You enterd right data")

//4 davaleba
let userInput = prompt("Enter a number:");
let number = parseInt(userInput);
let result = 0;

while (number) {
    result += number% 10;
    number = Math.floor(number/10);
  
} console.log(result);




