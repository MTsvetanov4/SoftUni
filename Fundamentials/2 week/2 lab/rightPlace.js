function rightPlace(string, char, match) {
    let result = "";

    for (let i = 0; i < string.length; i++) {

        if (string[i] == "_") {
            result += char;
        } else {
            result += string[i];
        }

    }

    if (result == match) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');