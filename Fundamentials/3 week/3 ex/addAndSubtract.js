function addAndSubtract(input) {

    let index = 0;
    let curNum = input[index];
    index++;
    let sumArr = 0;
    let sumModifiedArr = 0;
    let modifiedArr = [];

    for (let i = 0; i < input.length; i++) {

        sumArr += curNum;

        if (curNum % 2 == 0) {
            curNum += i;
            sumModifiedArr += curNum;
        } else {
            curNum -= i;
            sumModifiedArr += curNum;
        }

        modifiedArr.push(curNum);

        curNum = input[index];
        index++;

    }

    console.log(modifiedArr);
    console.log(sumArr);
    console.log(sumModifiedArr);

}

addAndSubtract([5, 15, 23, 56, 35])