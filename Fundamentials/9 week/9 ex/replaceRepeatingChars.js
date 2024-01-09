function replaceRepeatingChars(str) {

    let noRepeatStr = "";
    let previousChar = "";

    for (let curChar of str) {
        if (curChar != previousChar) {
            noRepeatStr += curChar;
            previousChar = curChar;
        }
    }

    console.log(noRepeatStr);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')