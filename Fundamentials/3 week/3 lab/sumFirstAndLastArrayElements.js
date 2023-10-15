function sumFirstAndLastArrayElements(input) {
    
    // 1-st solution

    let index = 0;
    let curNum = input[index]
    index++;
    let lastNum = 0;

    while (curNum != undefined) {
        curNum = input[index + 1]
        lastNum = input[index]
        index++;
    }

    sum = input[0] + lastNum;
    console.log(sum);

    // 2-nd solution
    // let firstNum = input[0];
    // let lastNum = input[input.length-1];
    // console.log(firstNum+lastNum);

}

sumFirstAndLastArrayElements([20, 30, 40])
sumFirstAndLastArrayElements([10, 17, 22, 33])