
function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let cakeSize = width * length;
    let partSize = 0;

    while (command !== "STOP") {
      

        partSize = Number(command)
        

        cakeSize -= partSize;
        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            return;
        }
        
        command = input[index];
        index++;

    }

    if (command === "STOP") {
        console.log(`${cakeSize} pieces are left.`);
        
    }else {
        console.log(`${cakeSize} pieces are left.`);
    }

}

cake(["10", "10", "20", "20", "20", "20", "21"]);
console.log("-------------------------------");
cake(["10", "2", "2", "4", "6", "STOP"]);
