function multiplicationTable(input) {
    for (m1 = 0; m1 <= 10; m1++) {
        for (m2 = 0; m2 <= 10; m2++) {
            sum = m1 * m2;
            console.log(`${m1} * ${m2} = ${sum}`);
        }
    }

}

multiplicationTable();