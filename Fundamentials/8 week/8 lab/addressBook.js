function addressBook(arr) {

    let addressBook = {};

    for (let item of arr) {
        let [name, address] = item.split(":");
        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort(([a], [b]) => a.localeCompare(b));
    let sorted = Object.fromEntries(entries);
    
    for(let[name, address] of Object.entries(sorted)){
        console.log(name,"->",address);
    }
    
}

addressBook(['Tim:Doe Crossing',

    'Bill:Nelson Place',

    'Peter:Carlyle Ave',

    'Bill:Ornery Rd']);