function moving(input){
let index = 0;
let width = Number(input[index]);
index++;
let length = Number(input[index]);
index++;
let height = Number(input[index]);
index++;
let command = input[index];
index ++;

let freeSpace = width * length * height;


while (command !== "Done"){
    let box = Number(command);

    freeSpace-= box;
    if (freeSpace<0){
        break;
    }

    command = input[index];
    index++;
}

if (freeSpace >= 0){
    console.log(`${freeSpace} Cubic meters left.`);
} else{
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
}


}

moving(["10","10","2","20", "20", "20", "20", "122"]);
console.log("---------------------------------------------------------------");
moving(["10","1","2","4","6","Done"]);