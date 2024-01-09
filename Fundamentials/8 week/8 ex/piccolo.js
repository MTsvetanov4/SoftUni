function piccolo(arr) {

    let allCars = [];
    let parking = [];

    for (let i = 0; i < arr.length; i++) {

        allCars.push(...(arr[i].split(", ")));

    }

    for (let i = 0; i < allCars.length; i++) {

        if (allCars[i].length == 2 && !parking.includes(allCars[i+1])) {
            parking.push(allCars[i + 1]);
        } else if (allCars[i].length == 3 && parking.includes(allCars[i+1])) {

            let index = parking.indexOf(allCars[i + 1])
            parking.splice(index, 1)

        } else {
            continue;
        }
    }

    if (parking.length < 1) {
        console.log("Parking Lot is Empty");
    } else {
        let sorted = parking.sort((a, b) => a.localeCompare(b));
        for (let car of sorted) {
            console.log(car);
        }
    }
}

// 2-nd solution

// function piccolo(arr) {
//     let parking = [];
//     for (let car of arr) {
//         let [action, carPlate] = car.split(', ');
//         if (action == 'IN' && !parking.includes(carPlate)) {
//             parking.push(carPlate);
//         } else if (action == 'OUT' && parking.includes(carPlate)) {
//             parking.splice(parking.indexOf(carPlate), 1);
//         }
//     }
//     if (parking.length > 0) {
//         for (let car of parking.sort((a, b) => a.localeCompare(b))) {
//             console.log(car);
//         }
//     } else {
//         console.log('Parking Lot is Empty');
//     }
// }



piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])
console.log("~~~~~~~~~~~~~~~~~~~~");
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'OUT, CA1234TA'])