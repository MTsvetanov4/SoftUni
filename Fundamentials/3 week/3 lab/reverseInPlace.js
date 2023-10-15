function reverseInPlace(inputArr) {

    //1st solution

    // let n = inputArr.length;
    // let reversed = [];

    // for (let i = n - 1; i >= 0; i--) {
    //     reversed.push(inputArr[i]);
    // }

    // console.log(reversed.join(" "));

    // 2nd solution

    for (i = 0; i < inputArr.length / 2; i++) {
        let j = inputArr.length - 1 - i;
        let temp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
    }

    console.log(inputArr.join(" "));


}



reverseInPlace(['a', 'b', 'c', 'd', 'e'])
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])
reverseInPlace(['33', '123', '0', 'dd'])