function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {

        let curNum = Number(command);

        if (curNum < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let divider = 2; divider < curNum; divider++) {

            if (curNum % divider === 0) {
                isPrime = false;
            }

        }

        if (isPrime) {

            sumPrime += curNum;

        } else {

            sumNonPrime += curNum;

        }

        command = input[index];
        index++;

    }

console.log(`Sum of all prime numbers is: ${sumPrime}`);
console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);

}


sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"]);
console.log("---------------------------------------");
sumPrimeNonPrime(["30", "83", "33", "-1", "20", "stop"]);
console.log("---------------------------------------");
sumPrimeNonPrime(["0", "-9", "0", "stop"]);