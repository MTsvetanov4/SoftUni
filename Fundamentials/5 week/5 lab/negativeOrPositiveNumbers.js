function negativeOrPositiveNumbers(arr) {

    let newArr = [];

    for (let numAsStr of arr) {
        let num = Number(numAsStr);

        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }

    }
    
    for (let num of newArr) {
        console.log(num);
    }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])