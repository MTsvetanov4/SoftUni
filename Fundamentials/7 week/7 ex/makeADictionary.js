function makeADictionary(arr) {
    let result = {};

    for (let item of arr) {
        let tokenFromArr = JSON.parse(item);
        let term = Object.keys(tokenFromArr)[0];
        let definition = Object.values(tokenFromArr)[0];
        result[term] = definition;
    }


    let sortedDictionary = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
    sortedDictionary.forEach(a => console.log(`Term: ${a[0]} => Definition: ${a[1]}`));

}



makeADictionary([

    '{"Bus":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'

])