function mirrorWords([input]) {

    let pattern = /(#|@)(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/g;
    let match = pattern.exec(input);
    let result = [];
    let counter = 0;

    while (match) {

        let { firstWord, secondWord } = match.groups;

        if (firstWord == secondWord.split("").reverse().join("")) {

            result.push(firstWord + " <=> " + secondWord);

        }
        counter++;
        match = pattern.exec(input);

    }

    if (counter == 0) {

        console.log("No word pairs found!");
        console.log("No mirror words!");

    } else {

        console.log(`${counter} word pairs found!`);

        if (result.length <= 0) {

            console.log("No mirror words!");

        } else {

            console.log("The mirror words are:");
            console.log(result.join(", "));

        }

    }

}

mirrorWords([

    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@## car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'

])