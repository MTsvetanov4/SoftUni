function triangleOfNumber(num) {

    // Solution with ".repeat()"
    // for(let i = 1; i<=num; i++){
    //     console.log(`${i} `.repeat(i));
    // }


    for (let i = 1; i <= num; i++) {
        let t = "";
        for (let l = 1; l <= i; l++) {
            t += i + " ";

        }

        console.log(t)

    }

}
triangleOfNumber(3);