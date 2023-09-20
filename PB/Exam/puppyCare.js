function puppyCare(input) {

    let puppyFood = Number(input[0]) * 1000;
    let index = 1;
    let command = input[index];
    index++;
    let izqdenaHrana = 0;

    while (command !== "Adopted") {

        izqdenaHrana += Number(command);

        command = input[index];
        index++;

    }
    if (izqdenaHrana > puppyFood) {
        console.log(`Food is not enough. You need ${izqdenaHrana - puppyFood} grams more.`);

    } else {
        console.log(`Food is enough! Leftovers: ${Math.abs(puppyFood - izqdenaHrana)} grams.`);
    }

}

puppyCare(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"])

