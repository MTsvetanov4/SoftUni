function equalSums(arr) {

    noEqualSums = true;

    for (let i = 0; i < arr.length; i++) {

        let sumOfPrevNums = 0;
        let sumOfNextNums = 0;
        let prevIndex = i - 1;
        let nextIndex = i + 1;

        while (arr[prevIndex] != undefined) {
            sumOfPrevNums += arr[prevIndex];
            prevIndex -= 1;
        }
        while (arr[nextIndex] != undefined) {
            sumOfNextNums += arr[nextIndex];
            nextIndex += 1;
        }
        prevIndex = i - 1;
        nextIndex = i + 1;
        if (arr[prevIndex] == undefined) {
            sumOfPrevNums = 0;
        }
        if (arr[nextIndex] == undefined) {
            sumOfNextNums = 0;
        }
        if (sumOfPrevNums == sumOfNextNums) {
            console.log(i);
            noEqualSums = false;
        }

    }

    if (noEqualSums == true) {
        console.log("no");
    }

}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])