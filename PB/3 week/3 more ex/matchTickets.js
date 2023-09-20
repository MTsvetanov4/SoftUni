function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    if (people <= 4) {
        budget -= budget * 0.75;
    } else if (people <= 9) {
        budget -= budget * 0.6;
    } else if (people <= 24) {
        budget -= budget * 0.5;
    } else if (people <= 49) {
        budget -= budget * 0.4;
    } else {
        budget -= budget * 0.25;
    }
    if (category === "Normal") {
        if (budget - (people*249.99) < 0) {
            console.log(`Not enough money! You need ${((people*249.99) - budget).toFixed(2)} leva.`);
        } else {
            console.log(`Yes! You have ${(budget - (people*249.99)).toFixed(2)} leva left.`);

        }
    } else {
        if (budget - (people*499.99) < 0) {
            console.log(`Not enough money! You need ${((people*499.99) - budget).toFixed(2)} leva.`);
        } else {
            console.log(`Yes! You have ${(budget - (people*499.99)).toFixed(2)} leva left.`);

        }
    }
}
matchTickets(["30000", "VIP", "49"]);