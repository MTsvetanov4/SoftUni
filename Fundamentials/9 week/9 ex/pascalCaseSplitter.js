function pascalCaseSplitter(str) {

    let newStr = "";

    for (let i = 0; i < str.length; i++) {

        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 96) {

            newStr += ", " + str[i];
            continue;

        }

        newStr += str[i];

    }

    let result = newStr.slice(2);
    console.log(result);

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')