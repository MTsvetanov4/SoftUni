function binaryToDecimal(binaryNum) {

    let sum = 0;
    let counter = 0;

    for (let i = binaryNum.length - 1; i >= 0; i--) {

        let curNum = Number(binaryNum[i]);
        if (curNum != 0) {
            sum += Math.pow(2, counter);
        }
        counter++;
    }
    console.log(sum);
}

binaryToDecimal("00001001")

