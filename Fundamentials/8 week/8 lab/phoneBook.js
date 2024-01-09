function phoneBook(arr) {
    let phoneBook = {};
    for (let token of arr) {
        let [name, phone] = token.split(" ");
        phoneBook[name] = phone;
    }
    for (let entry of Object.entries(phoneBook)) {
        console.log(entry.join(" -> "));
    }
}

phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])