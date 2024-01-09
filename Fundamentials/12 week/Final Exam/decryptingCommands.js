function decryptingCommands(input) {

    let text = input.shift();

    while (input[0] != "Finish") {

        let line = input.shift();
        let tokens = line.split(" ");
        let command = tokens[0];


        switch (command) {

            case "Finish":


                break;

            case "Replace":
                let match = tokens[1];
                let replacement = tokens[2];
                let parts = text.split(match);
                text = parts.join(replacement);
                console.log(text);
                break;

            case "Cut":

                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);
                let firstHalf = text.slice(0, startIndex);
                let secondHalf = text.slice(endIndex + 1);

                if (startIndex < 0 || startIndex >= endIndex || startIndex >= text.length && endIndex < 0 || endIndex < startIndex || endIndex >= text.length) {
                    console.log("Invalid indices!");
                    break;
                }

                text = firstHalf + secondHalf;
                console.log(text);
                break;

            case "Make":

                if (tokens[1] == "Upper") {

                    text = text.toUpperCase();
                    console.log(text);

                } else {

                    text = text.toLowerCase();
                    console.log(text);

                }
                break;

            case "Check":

                if (text.includes(tokens[1])) {

                    console.log(`Message contains ${tokens[1]}`);

                } else {

                    console.log(`Message doesn't contain ${tokens[1]}`);

                }
                break;

            case "Sum":

                let firstIndex = Number(tokens[1]);
                let secondIndex = Number(tokens[2]);
                let strToSum = text.slice(firstIndex, secondIndex + 1);
                let sum = 0;
                let idx = 0;
                for (let letter of strToSum) {

                    sum += strToSum.charCodeAt(idx)
                    idx++;
                }

                if (firstIndex < 0 || firstIndex > secondIndex || firstIndex > text.length && secondIndex < 0 || secondIndex > text.length) {
                    console.log("Invalid indices!");
                    break;
                }
                console.log(sum);
                break;

        }

    }

}




decryptingCommands(["ILikeSoftUni", "Replace I We", "Make Upper", "Check SoftUni", "Sum 1 4", "Cut 1 4", "Finish"])
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
decryptingCommands(["HappyNameDay", "Replace p r", "Make Lower", "Cut 2 23", "Sum -2 2", "Finish"])