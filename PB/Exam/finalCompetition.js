function computerFirm(input) {
    let dancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];
    let charitySum = 0;
    let moneyPerDancer = 0;
    let totalSum = 0;

    switch (season) {

        case "summer":

            if (place === "Bulgaria") {

                totalSum += dancers * points;
                totalSum *= 0.95;

            } else {

                totalSum += dancers * points;
                totalSum += totalSum * 0.5;
                totalSum *= 0.9;
            }

            break;

        case "winter":

            if (place === "Bulgaria") {

                totalSum += dancers * points;
                totalSum *= 0.92;

            } else {

                totalSum += dancers * points;
                totalSum += totalSum * 0.5;
                totalSum *= 0.85;
            }

            break;

    }

    charitySum += totalSum * 0.75;
    console.log(`Charity - ${charitySum.toFixed(2)}`);
    moneyPerDancer += (totalSum - charitySum) / dancers;
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}

computerFirm(["1", "89.5", "summer", "Abroad"]);
computerFirm(["25", "98", "winter", "Bulgaria"]);