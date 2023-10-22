function lastKNumbersSequance(n, k) {

    let result = [];
    

    for (let i = 1; i <= n; i++) {
        let sumOfSliced = 0;
        if (result.length == 0) {
            result.push(i);
        } else {
            let sliced = result.slice(-k).map(Number);
                   
            for (let sum of sliced) {
                sumOfSliced += sum;
            }
            result.push(sumOfSliced);
        }
    }
    console.log(result.join(" "));
}

lastKNumbersSequance(6, 3)