function trainTheTrainers(input) {
    let judges = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let judgesScore = 0;
    let finalScore = 0;
    let deviser = 0;

    while (command !== "Finish") {

        let nameOfPresentation = command;

        command = input[index];
        judgesScore = 0;

        for (let scores = 1; scores <= judges; scores++) {

            command = Number(input[index]);
            judgesScore += command;
            index++;
            deviser++;

        }

        finalScore += judgesScore;
        console.log(`${nameOfPresentation} - ${(judgesScore / judges).toFixed(2)}.`);
        command = input[index];
        index++;

    }

    console.log(`Student's final assessment is ${(finalScore / deviser).toFixed(2)}.`);

}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);
trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);