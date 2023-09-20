function vegetableMarket(input){
    let vegetablesPrice=Number(input[0]);
    let fruitsPrice=Number(input[1]);
    let vegetablesWeight=Number(input[2]);
    let fruitsWeight=Number(input[3]);
    let income= vegetablesPrice*vegetablesWeight+fruitsPrice*fruitsWeight;
    let incomeInEuro=income/1.94;
    console.log(incomeInEuro.toFixed(2));
    }