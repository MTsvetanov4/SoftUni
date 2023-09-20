function basketballTournament(input) {
    let index = 0;
    let command = input[index];
    index++;
    let winCounter = 0;
    let lostCounter = 0;
    let totalGame = 0;

    while (command !== "End of tournaments") {
        let tournamentName = command;
        let gamesNum = Number(input[index]);
        index++;

        for (let i = 0; i < gamesNum; i++) {

            let teamA = Number(input[index]);
            index++
            let teamB = Number(input[index]);
            index++

            if (teamA > teamB) {
                winCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentName}: win with ${Math.abs(teamB - teamA)} points.`);

            } else {
                lostCounter++;
                console.log(`Game ${i + 1} of tournament ${tournamentName}: lost with ${Math.abs(teamA - teamB)} points.`);

            }

            totalGame++;
        }
        command = input[index];
        index++;
    }


    console.log(`${(winCounter / totalGame * 100).toFixed(2)}% matches win`);
    console.log(`${(lostCounter / totalGame * 100).toFixed(2)}% matches lost`);




}

basketballTournament(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"]);
basketballTournament(["Ballers", "3", "87", "63", "56", "65", "75", "64", "Sharks", "4", "64", "76", "65", "86", "68", "99", "45", "78", "End of tournaments"]);