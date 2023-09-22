function biggestOf3Numbers(num1, num2, num3){
    num1IsGreater = false;
    num2IsGreater = false;
    num3IsGreater = false;

    if (num1 > num2) {
        num1IsGreater = true;
    } else if (num2 > num1) {
        num2IsGreater = true;
    } else if (num1 == num2) {
        if (num1 < num3) {
            console.log(num3);
            return;
        } else {
            console.log(num1);
            return;
        }
    }

    if (num1IsGreater == true) {
        if (num3 > num1) {
            console.log(num3);
        } else {
            if (num3 > num2) {
                console.log(num1);
            } else {
                console.log(num1);
            }

        }
    } else {
        if (num3 > num2) {
            console.log(num3);
        } else {
            if (num3 > num1) {
                console.log(num2);
            } else {
                console.log(num2);
            }

        }


    }
}
biggestOf3Numbers(-2,

    7,
    
    3)
console.log("-----------");
biggestOf3Numbers(-2, 1, 3)
console.log("-----------");
biggestOf3Numbers(0, 0, 2);

