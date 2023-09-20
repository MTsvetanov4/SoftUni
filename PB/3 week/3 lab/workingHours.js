function workingHours(input){
let hour = Number(input[0]);
let day = input[1];
switch(day){
    case "Monday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;
    case "Tuesday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;
    case "Wednesday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;
    case "Thursday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;
    case "Friday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;
    case "Saturday": 
    if (10 <= hour && hour <=18 ){
        console.log("open");
    }else {
        console.log("closed"); 
    }
    break;

    default: console.log("closed");

}


}
workingHours(["11", "Monday"]);
// (["19", "Friday"]) (["11","Sunday"])
