function sumFirstAndLast(arr) {

    let lastNum = Number(arr.pop());
    let firstNum = Number(arr.shift());
    let result = firstNum + lastNum;
    console.log(result);
}

sumFirstAndLast(['20', '30', '40'])
sumFirstAndLast(['5', '10'])