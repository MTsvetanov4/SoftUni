

function oldBooks(input) {

    let index = 0;
    let book = input[index];
    index++;

    let allBooks = 0
    let command = input[index];
    index++;
    let isFound= false;

    while (command !== "No More Books"){
        let currentBook = command;
        if (book === currentBook){
            isFound = true;
            break;
        }
        allBooks+=1;
      command = input[index];
      index++;
    }

    if(!isFound){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${allBooks} books.`);
    }else{
        console.log(`You checked ${allBooks} books and found it.`);

    }
  

}

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
console.log("----------------------------------------------");
oldBooks(["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
console.log("----------------------------------------------");
oldBooks(["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);