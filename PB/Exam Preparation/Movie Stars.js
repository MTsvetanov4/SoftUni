

function movieStars(input) {
    let index = 0;
    let actorsBudget = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "ACTION") {

        let actorName = command;
        let salary = 0;
        if (actorName.length <= 15) {

            salary = Number(input[index]);
            index++;

        } else {

            salary = actorsBudget * 0.2;

        }

        actorsBudget -= salary;

        if (actorsBudget < 0) {
            break;
        }

        command = input[index];
        index++;

    }

    if (actorsBudget < 0) {
        console.log(`We need ${Math.abs(actorsBudget).toFixed(2)} leva for our actors.`);
    } else {

        console.log(`We are left with ${actorsBudget.toFixed(2)} leva.`);

    }

}

movieStars(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
movieStars(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);