function maxSequenceOfEqualElements(arr) {

    let longestSequence = [];

    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        let currentSequence = [currNum];

        for (let j = i + 1; j < arr.length; j++) {
            let nextNum = arr[j];

            if (currNum == nextNum) {
                currentSequence.push(nextNum);
            } else {
                break;
            }
        }
        if (currentSequence.length > longestSequence.length) {
            longestSequence = currentSequence;
        }
    }

    console.log(longestSequence.join(" "));
}



maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);
