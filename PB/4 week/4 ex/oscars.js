function oscars(input) {
    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let juryMembers = Number(input[2]);
    let actorPoints = 0;
    let actorNamePoints = 0;
    let totalActorPoints = 0;
    let totalPoints = 0;

    for (let i = 3; i <= juryMembers + 2 + juryMembers; i++) {
        let curRow = input[i];

        if (i % 2 === 0) {

            actorPoints += Number(curRow);

        } else {

            actorNamePoints += input[i].length;

        }

        if (actorPoints !== 0 && actorNamePoints !== 0) {

            totalActorPoints += (actorPoints * actorNamePoints) / 2;

        }

        if (actorPoints !== 0) {

            actorNamePoints = 0;
            actorPoints = 0;

        }

        if (academyPoints + totalActorPoints >= 1250.5) {
            totalPoints = academyPoints + totalActorPoints;
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }

    }
    if (academyPoints + totalActorPoints < 1250.5) {

        totalPoints = academyPoints + totalActorPoints;
        let neededPoints = 1250.5 - totalPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);

    }

}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);