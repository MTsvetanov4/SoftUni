function yardGreening(input){
    let kvM = Number(input[0]*7.61);
    let discount = kvM*0.18;
    let cena = kvM-discount;


console.log(`The final price is: ${cena} lv.`);
console.log(`The discount is: ${discount} lv.`);
}