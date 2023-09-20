function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let avgSum = 0;
    badGradeCounter = 0;
    let i = 1;

    while (i <= 12) {
        let currentGrade = Number(input[index])
        index++
        if (currentGrade < 4.00) {
            badGradeCounter++;
            if (badGradeCounter > 1) {
                console.log(`${name} has been excluded at ${i} grade`);
                return;
            }
            continue;
        }
        avgSum += currentGrade;
        i++
    }
    console.log(`${name} graduated. Average grade: ${(avgSum / 12).toFixed(2)}`);

}
graduation(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "3", "2", "6", "6", "5.43", "5"]);