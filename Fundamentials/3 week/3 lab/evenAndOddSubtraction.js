function evenAndOddSubtraction(arr) {

    let evens = 0;
    let odds = 0;

    for (let i = 0; i < arr.length; i++) {

        let curNum = Number(arr[i]);

        if (curNum % 2 == 0) {
            evens += curNum;
        } else {
            odds += curNum;
        }

    }

    console.log(evens - odds);

}

// evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3, 5, 7, 9])