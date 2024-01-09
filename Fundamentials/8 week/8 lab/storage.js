function storage(arr) {
    let map = new Map();

    for (let str of arr) {
        let tokens = str.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);
        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let curQuantity = map.get(product);
            let newQuantity = curQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let line of map) {
        console.log(`${line[0]} -> ${line[1]}`);
    }

}

storage(['tomatoes 10',

    'coffee 5',

    'coffee 5',

    'olives 100',

    'apples 40'])