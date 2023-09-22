function integerAndFloat(num1, num2, num3) {

    let sum = num1 + num2 + num3;
    let sumAsString = String(sum);
    let isFloat = false;

    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == ".") {
            isFloat = true;
        }
    }
    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);