function fruitOrVegetable(input){
//     Да се напише функция, която получава аргумент  име на продукт  и проверява дали е плод или зеленчук.
// •	Плодовете "fruit" имат следните възможни стойности:  banana, apple, kiwi, cherry, lemon и grapes
// •	Зеленчуците "vegetable" имат следните възможни стойности:  tomato, cucumber, pepper и carrot
// •	Всички останали са "unknown"
// Да се изведе "fruit", "vegetable" или "unknown" според въведения продукт.

    let type = input[0];
    
        switch(type){
            case "banana" : 
            case "apple" : 
            case "kiwi" : 
            case "cherry" : 
            case "grapes" :             
            case "lemon" : console.log("fruit"); break;
            case "tomato" : 
            case "cucumber" :
            case "pepper" :
            case "carrot" : console.log("vegetable"); break;
            default : console.log("unknown"); break;
        }
     
        }
        
        fruitOrVegetable(["pepper"]);