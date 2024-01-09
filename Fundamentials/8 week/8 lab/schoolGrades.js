function schoolGrades(arr) {

    let map = new Map();
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

    for (let str of arr) {

        let tokens = str.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);
        let numberOfGrades = grades.length;
        let sum = 0;
        grades.forEach(value => { sum += value; });
        let student = new Student(name, sum, numberOfGrades);
        student.allStudents();

    }

    for (let curStudent = 0; curStudent < listOfStudents.length; curStudent++) {

        if (typeof listOfStudents[curStudent] == 'string') {

            let name = listOfStudents[curStudent];
            let gradesSum = listOfStudents[curStudent + 1];
            let numOfGrades = listOfStudents[curStudent + 2];

            if (!map.has(name)) {

                map.set(name, (gradesSum / numOfGrades).toFixed(2));

            } else {

                let curGradesSum = Number(map.get(name));
                let newGradesSum = Number(curGradesSum += gradesSum);
                
                map.set(name, (newGradesSum/numOfGrades).toFixed(2));
                listOfStudents.splice(listOfStudents.indexOf(listOfStudents[curStudent]), 3)
            }

        }

    }


    // for (let line of map) {
    //     console.log(`${line[0]} -> ${line[1]}`);
    // }

    console.log(listOfStudents);
    console.log(map);
}

schoolGrades(['Lilly 4 6 6 5',

    'Tim 5 6',

    'Tammy 2 4 3',

    'Tim 6 6']);