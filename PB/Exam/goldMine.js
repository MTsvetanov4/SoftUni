function goldMine(input) {

    let location = input[0];
    let index = 1;
    let command = Number(input[index]);
    index++;
    let expectedEarnPerDay = 0;
    let workingDays = 0;
    let earnPerDay = 0;

    for (let i = 1; i <= location; i++) {

        expectedEarnPerDay = command;
        command = Number(input[index]);
        index++;
        workingDays = command;

        for (let m = 1; m <= workingDays; m++) {

            command = Number(input[index]);
            earnPerDay += command;
            index++;

        }

        earnPerDay /= workingDays;

        if (earnPerDay >= expectedEarnPerDay) {

            console.log(`Good job! Average gold per day: ${earnPerDay.toFixed(2)}.`);

        } else {

            console.log(`You need ${(Math.abs(expectedEarnPerDay - earnPerDay)).toFixed(2)} gold.`);

        }

        command = Number(input[index]);
        index++;
        expectedEarnPerDay = 0;
        workingDays = 0;
        earnPerDay = 0;
    }

}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);
console.log("~~~~~~~~~~~~~~~~~");
goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])