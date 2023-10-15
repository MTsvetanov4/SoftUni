function dayOfWeek(index) {



    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    let result = days[index - 1];
    if (result != undefined) {
        console.log(result);
    } else {
        console.log("Invalid day!");
    }

}

dayOfWeek(3)
dayOfWeek(1)
dayOfWeek(7)
dayOfWeek(9)
dayOfWeek(5.5)
dayOfWeek(0)