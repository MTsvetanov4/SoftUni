function schoolGrades(arr) {

    let listOfStudents = [];

    class Student {

        constructor(name, sum, numberOfGrades) {
            this.name = name;
            this.sum = sum;
            this.numberOfGrades = numberOfGrades;
        }

        allStudents() {
            listOfStudents.push(this.name);
            listOfStudents.push(this.sum);
            listOfStudents.push(this.numberOfGrades);
        }

    }

    for (let student of arr) {
        let tokens = student.split(" ");

        for (let i = 0; i < tokens.length; i++) {

            if (tokens[i].length > 1) {

                let name = tokens.shift();
                let gradesSum = 0;
                let numOfGrades = 0;

                for (let j = 0; j < tokens.length; j++) {
                    gradesSum += Number(tokens[j]);
                    numOfGrades++;
                }

                if (listOfStudents.length == 0) {

                    let student = new Student(name, gradesSum, numOfGrades);
                    student.allStudents();

                } else if (!listOfStudents.includes(name)) {

                    let student = new Student(name, gradesSum, numOfGrades);
                    student.allStudents();

                } else {
                    let curGradesSum = 0;
                    let curNumOfGrades = 0;

                    for (let k = 0; k < listOfStudents.length; k++) {

                        if (listOfStudents[k] == name) {

                            curGradesSum = listOfStudents[k + 1];
                            curNumOfGrades = listOfStudents[k + 2];

                        }

                    }

                    listOfStudents.splice(listOfStudents.indexOf(name), 3);
                    student = new Student(name, curGradesSum + gradesSum, curNumOfGrades + numOfGrades);
                    student.allStudents();
                }

            }

        }

    }

    let finalResult = [];

    for (let l = 0; l < listOfStudents.length; l++) {

        if (listOfStudents[l].length > 1) {

            let name = listOfStudents[l];
            let grade = (listOfStudents[l + 1] / listOfStudents[l + 2]).toFixed(2);
            finalResult.push(name + ": " + grade);

        }

    }

    finalResult.sort((a, b) => a.localeCompare(b));

    for (let student of finalResult) {

        console.log(student);

    }

}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2',

    'Tim 6 6', "Mitko 5 5", "Stanislava 6 6 3 6 6 6", "Mitko 6", 'Atanas 2 2 2', 'Atanas 6 5 6 6 4', "Kiro"]);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
schoolGrades(['Steven 3 5 6 4',

    'George 4 6',

    'Tammy 2 5 3',

    'Steven 6 3'])