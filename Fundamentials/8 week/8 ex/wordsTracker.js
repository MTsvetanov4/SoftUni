function wordsTracker(arr) {

    let mainWords = arr.shift().split(" ");
    let occurrences = {};

    for (let word of mainWords) {
        occurrences[word] = 0;
    }

    for (let word of arr) {
        if (word in occurrences) {
            occurrences[word]++;
        }
    }

    

    for (let [word, coincidences] of Object.entries(occurrences).sort((a, b) => b[1]-a[1])) {
        console.log(`${word} - ${coincidences}`);
    }

}

wordsTracker([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])
