function solve(city){


for(let key of Object.keys(city)){
    console.log(key, "->", city[key]);
}

}

solve({    name: "Sofia",    area: 492,population: 1238438, country: "Bulgaria", postCode: "1000" })
solve({    name: "Plovdiv",    area: 389,    population: 1162358,    country: "Bulgaria",    postCode: "4000"   })