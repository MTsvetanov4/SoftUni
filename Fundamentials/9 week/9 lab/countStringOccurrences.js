function countStringOccurrences(text, str) {
    let words = text.split(" ");
    let matches = words.filter(word => word == str);
    console.log(matches.length);
}

countStringOccurrences('This is a word and it also is a sentence',

    'is')


    // 2-nd solution

    // function countStringOccurrences(text, str) {
    //     let words = text.split(" ");
    //     let count = 0;
    
    //     for (let word of words) {
    //         if (word == str) {
    //             count++;;
    //         }
    //     }
    //     console.log(count);
    // }