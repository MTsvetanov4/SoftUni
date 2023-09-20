function multiplicationTable(input) {
    let num = Number(input[0]);


    if (num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9 || num === 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} * ${num} = ${i * num}`);
        }
    }

}
multiplicationTable(["5"]);