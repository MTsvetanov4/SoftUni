function simpleCalculator(num1, num2, operator) {

    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;
    switch (operator) {
        case "multiply":
            console.log(multiply(num1, num2));
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
        case "add":
            console.log(add(num1, num2));
            break;
        case "subtract":
            console.log(subtract(num1, num2));
            break;
    }
    
}

simpleCalculator(50, 13, 'subtract')