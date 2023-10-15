function equalArrays(arr1, arr2) {

    let index = 0;
    let sum = 0;
    let notIdentical = false;

    for (let i = 0; i < arr1.length; i++) {

        let arr1CurNum = Number(arr1[i]);

        for (let j = i; j < arr2.length; j++) {

            let arr2CurNum = Number(arr2[j]);

            if (arr1CurNum == arr2CurNum) {
                sum += arr2CurNum;
                break;
            } else {
                notIdentical = true;
                break;
            }

        }

        if (notIdentical == true) {
            console.log(`Arrays are not identical. Found difference at ${index} index`);
            return;
        }

        index++;

    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1'], ['10']);