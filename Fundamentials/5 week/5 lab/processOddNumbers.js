function processOddNumbers(arr){

    let oddIndexes = arr.filter((x,i) => i%2!=0);
    let doubled = oddIndexes.map(x =>x*2);
    let reversed = doubled.reverse();
    let result = reversed.join(" ");
    console.log(result); 

}

processOddNumbers([10, 15, 20, 25])