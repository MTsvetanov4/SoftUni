function heroRecruitment(input) {

    let line = input.shift();
    let tokens = line.split(" ");
    let heroes = {};
    while (tokens[0] != "End") {
        let name = tokens[1];
        switch (tokens[0]) {

            case "Enroll":

                if (name in heroes) {

                    console.log(`${name} is already enrolled.`);

                } else {

                    heroes[name] = [];

                }

                break;
            case "Unlearn":
                if (name in heroes) {

                    if (heroes[name].includes(tokens[2])) {
                       
                        heroes[name].splice(heroes[name].indexOf(tokens[2]), 1)                       

                    } else {

                        console.log(`${name} doesn't know ${tokens[2]}.`);

                    }

                } else {
                    console.log(`${name} doesn't exist.`);
                }

                break;
            case "Learn":

                if (name in heroes) {
                    if (heroes[name].includes(tokens[2])) {
                        console.log(`${name} has already learnt ${tokens[2]}.`);
                    } else {
                         
                        
                        heroes[name].push(tokens[2]);
                    }
                } else {
                    console.log(`${name} doesn't exist.`);
                }

                break;


        }

        line = input.shift();
        tokens = line.split(" ");

    }

    console.log("Heroes:");
    
    for(let name in heroes){

        let hero = heroes[name];
        console.log("== "+ name + ": " + hero);
        
        

    }
    
}


// heroRecruitment(["Enroll Stefan",

//     "Enroll Peter",

//     "Enroll Stefan",

//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWorks",

//     "Learn John ItShouldNotWork",

//     "Unlearn George Dispel",

//     "Unlearn Stefan ItShouldWork",

//     "End"])
// heroRecruitment(["Enroll Stefan",

// "Learn Stefan ItShouldWork",

// "Learn Stefan ItShouldWork",

// "Unlearn Stefan NotFound",

// "End"])
heroRecruitment(["Enroll Stefan",

"Enroll Peter",

"Enroll John",

"Learn Stefan Spell",

"Learn Peter Dispel",

"End"])