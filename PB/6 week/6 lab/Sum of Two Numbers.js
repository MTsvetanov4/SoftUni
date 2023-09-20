function sumofTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNum = Number(input[2]);
    let numOfComb = 0;
    let isFound = false;

    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            let sum = x + y;
            numOfComb++;
            if (sum == magicNum) {
                console.log(`Combination N:${numOfComb} (${x} + ${y} = ${magicNum})`);
                isFound = true;
                break;
            }

        }
        if (isFound) {
            break;
        }

    }
    if (!isFound) {
        console.log(`${numOfComb} combinations - neither equals ${magicNum}`);
    }

}

sumofTwoNumbers(["1", "10", "5"]);
console.log("-------------------------------------");
sumofTwoNumbers(["88", "888", "1000"]);
console.log("-------------------------------------");
sumofTwoNumbers(["23", "24", "20"]);
console.log("-------------------------------------");
sumofTwoNumbers(["88", "888", "2000"]);