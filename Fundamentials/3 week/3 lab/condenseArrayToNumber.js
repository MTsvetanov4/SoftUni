function condenseArrayToNumber(arr) {

    while (arr.length > 1) {
        let condense = [];

        for (let i = 0; i < arr.length - 1; i++) {
            condense[i] = Number(arr[i] + arr[i + 1]);
        }

        arr = condense;

    }

    console.log(Number(arr));

}

condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])