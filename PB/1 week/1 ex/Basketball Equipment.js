function basketballequipment(input){
    let taxPerYear=Number(input[0]);
    let shoes = taxPerYear-taxPerYear*0.4;
    let equip = shoes-shoes*0.2;
    let ball = equip/4;
    let accessories = ball/5;
    let razhodi = taxPerYear+shoes+equip+ball+accessories; 
console.log(razhodi);
}