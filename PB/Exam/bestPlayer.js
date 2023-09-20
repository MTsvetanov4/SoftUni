function bestPlayer(input) {

    let index = 0;
    let command = input[index];
    index++;
    let playerName = ""
    let goalsScored = 0;
    let lastGoals = 0;
    let lastPlayerName = "";

    while (command !== "END") {


        lastPlayerName = command;
        command = input[index];
        index++;
        goalsScored = Number(command);

        if (goalsScored > lastGoals) {

            lastGoals = goalsScored;
            playerName = lastPlayerName;
        }

        if (goalsScored >= 10) {
            break;
        }

        command = input[index];
        index++;

    }

    console.log(`${playerName} is the best player!`);

    if (goalsScored >= 3) {

        console.log(`He has scored ${lastGoals} goals and made a hat-trick !!!`);

    } else {

        console.log(`He has scored ${lastGoals} goals.`);

    }


}

bestPlayer(["Silva",
    "5",
    "Harry Kane",
    "1", "END"]);
