function substitute(input) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let subCount = 0;

    for (let first = k; first <= 8; first++) {

        for (let second = 9; second >= l; second--) {

            for (let third = m; third <= 8; third++) {

                for (let forth = 9; forth >= n; forth--) {

                    if (first % 2 == 0 && second % 2 != 0 && third % 2 == 0 && forth % 2 != 0) {

                        let firstNumAsString = String(first) + String(second);
                        let secondNumAsString = String(third) + String(forth);

                        if (firstNumAsString == secondNumAsString) {

                            console.log("Cannot change the same player.");
                            continue;

                        }

                        console.log(firstNumAsString + " - " + secondNumAsString);
                        subCount++;
                        
                        if (subCount==6){
                            return;
                        }
                    }

                }

            }

        }

    }

}

substitute(["7", "6", "8", "5"]);
console.log("~~~~~~~~~~~~~~~~~~~~~~");
substitute(["6", "7", "5", "6"]);

