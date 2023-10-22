function arrayManipulations(arr) {

    let finalArr = arr.shift().split(" ").map(Number);

    while (arr.length > 0) {
        let token = arr.shift().split(" ");
        let command = token.shift();

        if (command == "Add") {
            finalArr.push(Number(token));
        } else if (command == "Remove") {

            for (let i = 0; i < finalArr.length; i++) {
                let num = finalArr[i];
                if (num == Number(token)) {
                    finalArr.splice(i, 1);
                }
            }
        } else if (command == "RemoveAt") {
            finalArr.splice(token, 1);
        } else if (command == "Insert") {
            finalArr.splice(token[1], -1, Number(token[0]));
        }

    }

    console.log(finalArr.join(" "));

}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
arrayManipulations(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])