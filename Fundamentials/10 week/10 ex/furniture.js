function furniture (arr){

let items = [];
let totalPrice = 0;
let command = arr.shift();
let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

while(command !="Purchase"){

    let match = command.match(pattern);
    
    if(match !=null){

    let {name, price, qty} = match.groups;
    let furniturePrice = Number(qty)*Number(price);
        items.push(name);
        totalPrice += furniturePrice;

    }

    command = arr.shift();

}

if(items.length<=0){

    console.log("Bought furniture:");
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}else{

    console.log("Bought furniture:");
    console.log(items.join("\n"));
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

}

furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase'])