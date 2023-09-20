function sumOfOddNumbers(n) {
    let sum = 0;
    let i = 1;
    for (let rows = 1; rows <= n; rows++) {
        for (i; i <= 100; i++) {
            if (i % 2 == 1) {
                console.log(i);
                sum += i;
                break;
            }

        }
        i++;
    }
    console.log(`Sum: ${sum}`)
}
sumOfOddNumbers(5);