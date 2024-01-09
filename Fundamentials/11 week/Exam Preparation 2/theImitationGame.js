function theImitationGame(arr) {

    let msg = arr.shift();
    let command = arr.shift();

    while (command != "Decode") {

        let tokens = command.split("|");
        let action = tokens.shift();

        if (action == "Move") {

            let lettersCount = Number(tokens.shift());
            let firstLetters = msg.slice(0, lettersCount);
            msg = msg.replace(firstLetters, "");
            msg += firstLetters;

        } else if (action == "Insert") {

            let idx = Number(tokens.shift());
            let val = tokens.shift();
            msg = msg.slice(0, idx) + val + msg.slice(idx);

        } else if (action == "ChangeAll") {

            let [substring, replacement] = tokens;

            while (msg.includes(substring)) {

                msg = msg.replace(substring, replacement);
                
            }

        }

        command = arr.shift();
    }

    console.log(`The decrypted message is: ${msg}`);

}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode'])
console.log("~~~~~~~~~~~~~~~~~~~~~");
theImitationGame(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode'])