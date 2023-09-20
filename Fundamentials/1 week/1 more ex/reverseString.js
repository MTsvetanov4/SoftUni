function reverseString(word) {
    reversedWord = "";
    let ch = "";

    for (let i = word.length-1; i >= 0; i--) {
        ch = word[i];
        reversedWord+=ch;

    }
    
console.log(reversedWord);

}
reverseString("Tramvai")
