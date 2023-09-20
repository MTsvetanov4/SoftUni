function catLife(input) {

    let catType = input[0];
    let gender = input[1];
    let catYears = 0;

    switch (catType) {

        case "British Shorthair":

            if (gender === "m") {

                catYears = 13;
                catYears *= 12;
                catYears /= 6;

            } else {

                catYears = 14;
                catYears *= 12;
                catYears /= 6;

            }
            break;
        case "Siamese":

            if (gender === "m") {

                catYears = 15;
                catYears *= 12;
                catYears /= 6;

            } else {
                catYears = 16;
                catYears *= 12;
                catYears /= 6;
            }
            break;
        case "Persian":

            if (gender === "m") {
                catYears = 14;
                catYears *= 12;
                catYears /= 6;
            } else {
                catYears = 15;
                catYears *= 12;
                catYears /= 6;
            }
            break;
        case "Ragdoll":

            if (gender === "m") {
                catYears = 16;
                catYears *= 12;
                catYears /= 6;
            } else {
                catYears = 17;
                catYears *= 12;
                catYears /= 6;
            }
            break;
        case "American Shorthair":

            if (gender === "m") {
                catYears = 12;
                catYears *= 12;
                catYears /= 6;
            } else {
                catYears = 13;
                catYears *= 12;
                catYears /= 6;
            }
            break;
        case "Siberian":

            if (gender === "m") {
                catYears = 11;
                catYears *= 12;
                catYears /= 6;
            } else {
                catYears = 12;
                catYears *= 12;
                catYears /= 6;
            }

            break;
        default:

            console.log(`${catType} is invalid cat!`);
            return;

    }

    console.log(`${catYears} cat months`);

}

catLife(["Persian",
"m"])