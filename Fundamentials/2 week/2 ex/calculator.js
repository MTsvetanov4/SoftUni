function calculator(num1, operator, num2){

    switch(operator){

        case "+": 
        console.log((num1 + num2).toFixed(2));
        break;
        case "-": 
        console.log((num1 - num2).toFixed(2));
        break;
        case "*": 
        console.log((num1 * num2).toFixed(2));
        break;
        case "/": 
        console.log((num1 / num2).toFixed(2));
        break;

    }

}

calculator(5,'+',10);
console.log("----------");
calculator(25.5,'-',3);
console.log("----------");
calculator(10,'/',5);
console.log("----------");
calculator(5,'*',2);