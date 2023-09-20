function specialNumbers(input) {

    let num = Number(input[0]);
    let buf = "";
    let numBuf = "";

    for (let curNum = 1111; curNum <= 9999; curNum++) {

        let curNumToString = String(curNum);

        for (let i = 0; i < curNumToString.length; i++) {

            let curDigit = Number(curNumToString[i]);

            if (num % curDigit === 0) {

                numBuf += curDigit;

            } else {

                numBuf = "";
                break;

            }

        }

        if (numBuf != "") {

            buf += numBuf + " ";
            numBuf = "";

        }

    }

    console.log(buf);

}

specialNumbers(["3"]);
console.log("--------------------------------");
specialNumbers(["11"]);
console.log("--------------------------------");
specialNumbers(["16"]);