function trekkingMania(input){
let groups = Number(input[0]);
let totalPeople = 0;
let musala = 0;
let monblan = 0;
let kalimandjaro = 0;
let k2 = 0;
let everest = 0;

for(let i = 1; i <= groups; i++){
    let curGroup = Number(input[i]);
    totalPeople+=curGroup;
if (curGroup <= 5) {
musala +=curGroup;
} else if (curGroup <= 12){
    monblan+=curGroup;
} else if (curGroup <= 25){
    kalimandjaro+=curGroup;
} else if (curGroup <= 40){
    k2+=curGroup;
} else {
    everest+=curGroup;
}

    
}

console.log(((musala/totalPeople)*100).toFixed(2)+"%");
console.log(((monblan/totalPeople)*100).toFixed(2)+"%");
console.log(((kalimandjaro/totalPeople)*100).toFixed(2)+"%");
console.log(((k2/totalPeople)*100).toFixed(2)+"%");
console.log(((everest/totalPeople)*100).toFixed(2)+"%");


}
trekkingMania(["5","25","41","31","250","6"]);