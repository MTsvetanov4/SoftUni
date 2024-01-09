function partyTime(arr) {
    //     let regularGuest = [];
    //     let vipGuests = [];
    //     let index = 0;
    //     let command = arr[index];
    //     index++;

    //     while (command != "PARTY") {
    //         let guest = command;

    //         let firstLetter = Number(guest[0]);

    //         if (firstLetter >= 0) {
    //             vipGuests.push(guest);
    //         } else {
    //             regularGuest.push(guest);
    //         }
    //         command = arr[index];
    //         index++;
    //     }
    //     for (let i = arr.indexOf("PARTY") + 1; i < arr.length; i++) {


    //         if (regularGuest.includes(arr[i])) {
    //             regularGuest.splice(regularGuest.indexOf(arr[i]), 1);
    //         }
    //         if (vipGuests.includes(arr[i])) {
    //             vipGuests.splice(vipGuests.indexOf(arr[i]), 1);
    //         }

    //     }
    //     console.log(vipGuests.length+regularGuest.length);
    //     for(vips of vipGuests){
    //         console.log(vips);
    //     }
    //     for(regGuest of regularGuest){
    //         console.log(regGuest);
    //     }
    // }


    //                                                              2-nd Solution (80:100)


    // let list = new Set();

    // while (arr[0] != "PARTY") {
    //     list.add(arr.shift());
    // }
    // arr.shift();

    // for (let name of arr) {
    //     list.delete(name);
    // }

    // console.log(list.size);

    // let vips = [];
    // let regulars = [];

    // for (let name of list) {
    //     if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
    //         vips.push(name);
    //     } else {
    //         regulars.push(name);
    //     }
    // }
    // if (vips.length > 0) {
    //     console.log(vips.join("\n"));
    // }
    // if (regulars.length > 0) {
    //     console.log(regulars.join("\n"));
    // }


        //                                                          3-rd Solution
    
  let list = [];
    while (arr[0] != "PARTY") {
        list.push(arr.shift());
    }
    arr.shift();

    for (let name of arr) {
        let index = list.indexOf(name);

        if(index != -1){
            list.splice(index, 1);
        }
       
    }

    console.log(list.length);

    let vips = [];
    let regulars = [];

    for (let name of list) {
        if (name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
            vips.push(name);
        } else {
            regulars.push(name);
        }
    }
    if (vips.length > 0) {
        console.log(vips.join("\n"));
    }
    if (regulars.length > 0) {
        console.log(regulars.join("\n"));
    }



}

partyTime(['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])
// partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])