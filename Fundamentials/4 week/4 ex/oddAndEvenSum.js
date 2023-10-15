function oddAndEvenSum(num) {
    // 1-st solution

    // let oddSum = 0;
    // let evenSum = 0;

    // let numAsStr = String(num);

    // for (let char of numAsStr) {
    //     let digit = Number(char);

    //     if (digit % 2 == 0) {
    //         evenSum+=digit;
    //     }else{
    //         oddSum+=digit
    //     }
    // }

    // console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);


    // 2-nd solution
    let numAsStr = String(num);
    let [evenSum, oddSum] = calcEvenOddSum(numAsStr);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    function calcEvenOddSum(str) {

        let oddSum = 0;
        let evenSum = 0;

        for (let char of str) {
            let digit = Number(char);


            if (digit % 2 == 0) {
                evenSum += digit;
            } else {
                oddSum += digit
            }
        }

        return [evenSum, oddSum]
    
    }

}

oddAndEvenSum(1000435);