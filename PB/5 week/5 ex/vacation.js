function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let currentMoney = Number(input[index]);
    index++;
    let spendCounter = 0;
    let isPossibleSaveMoney = true;
    let dayCounter = 0;


    while (neededMoney > currentMoney) {
        let action = input[index];
        index++;
        let tempMoney = Number(input[index]);
        index++;
        dayCounter++;

        switch (action) {
            case "spend":
                spendCounter++;
                currentMoney -= tempMoney;
                if (currentMoney < 0) {
                    currentMoney = 0;
                }
                if (spendCounter === 5) {
                    isPossibleSaveMoney = false;
                }
                break;

            case "save":
                currentMoney += tempMoney;
                spendCounter = 0;
                break;
        }
        if (!isPossibleSaveMoney) {
            break;
        }

    }


    if (isPossibleSaveMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    } else {
        console.log("You can't save the money.");

        console.log(dayCounter);
    }


}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
console.log("-------------------------------------------");
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
console.log("-------------------------------------------");
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);