function censoredWords(str, word){

let result = str.split(word).join("*".repeat(word.length));
console.log(result);

}

censoredWords('Find the hidden word', 'hidden')