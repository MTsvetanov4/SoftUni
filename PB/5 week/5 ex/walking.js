function walking(input) {
    let index = 0;
    let command = input[index];
    let currentSteps = 0;
    let steps = 0;


    while (command !== "Going home") {
        currentSteps = Number(command);
        steps += currentSteps;

        if (steps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${steps - 10000} steps over the goal!`);
            break;
        }
        index++
        command = input[index];


    }
    index++
    command = input[index];
    currentSteps = Number(command);
    steps += currentSteps;

    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - 10000} steps over the goal!`);
        
    }else if  (steps < 10000){
       console.log(`${ 10000-steps} more steps to reach goal.`);
    }  

    
}  
    walking(["1000","1500","2000","6500"]);
    console.log("-------------------");
    walking(["125", "250", "4000", "30", "2678", "4682"]);
    console.log("-------------------")
    walking(["1500", "300", "2500", "3000", "Going home", "200"]);
    console.log("-------------------");
    walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);