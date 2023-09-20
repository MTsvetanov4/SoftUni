function computerFirm(input) {

    let index = 1;
    let computers = Number(input[0]);
    let code = Number(input[index]);
    index++;
    let realizedSales = 0;
    let possibleSalesAsDigit = 0;
    let ratingsSum = 0;

    for (let i = 1; i <= computers; i++) {
        let rating = code % 10;
        let possibleSalesAsString = "";
        let possibleSales = String(code);

        for (let i = 0; i < 2; i++) {

            let curDigit = Number(possibleSales[i]);
            let position = i + 1;
            possibleSalesAsString += curDigit;

        }
        let curRealizedSales = 0;
        switch (rating) {

            case 2:

                ratingsSum += 2;
                curRealizedSales = 0;

                break;

            case 3:

                ratingsSum += 3;
                possibleSalesAsDigit = Number(possibleSalesAsString);
                curRealizedSales += possibleSalesAsDigit *= 0.5;

                break;

            case 4:

                ratingsSum += 4;
                possibleSalesAsDigit = Number(possibleSalesAsString);
                curRealizedSales += possibleSalesAsDigit *= 0.7;

                break;

            case 5:

                ratingsSum += 5;
                possibleSalesAsDigit = Number(possibleSalesAsString);
                curRealizedSales += possibleSalesAsDigit *= 0.85;

                break;

            case 6:

                ratingsSum += 6;
                possibleSalesAsDigit = Number(possibleSalesAsString);
                curRealizedSales += possibleSalesAsDigit;

                break;

        }
        realizedSales += curRealizedSales;
        code = Number(input[index]);
        index++;
    }

    console.log(realizedSales.toFixed(2));
    console.log((ratingsSum / computers).toFixed(2));


}

computerFirm(["3", "103", "103", "103"]);
console.log("---");
computerFirm(["5", "122", "156", "202", "214", "185"]);
console.log("---");
computerFirm(["2", "204", "206"]);
