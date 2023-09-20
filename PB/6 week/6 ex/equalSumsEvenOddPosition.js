function equalSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let buf = "";

    for (let curNum = startNum; curNum <= endNum; curNum++) {

        let evenPositionSum = 0;
        let oddPositionSum = 0;
        let curNumAsString = String(curNum);

        for (let i = 0; i < curNumAsString.length; i++) {

            let curDigit = Number(curNumAsString[i]);
            let position = i + 1;

            if (position % 2 === 0) {

                evenPositionSum += curDigit;

            } else {

                oddPositionSum += curDigit;

            }
        }

        if (evenPositionSum === oddPositionSum) {

            buf += curNumAsString + " ";

        }

    }

    console.log(buf);

}

equalSumsEvenOddPosition(["100000", "100050"]);
console.log("-------------------------------");
equalSumsEvenOddPosition(["123456", "124000"]);
console.log("-------------------------------");
equalSumsEvenOddPosition(["299900", "300000"]);
console.log("-------------------------------");
equalSumsEvenOddPosition(["100115", "100120"]);