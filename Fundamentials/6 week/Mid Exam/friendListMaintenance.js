function friendListMaintenance(arr) {

    let friendsList = arr.shift().split(", ");
    let blacklistedCount = 0;
    let lostNames = 0;
    for (let current of arr) {
        let tokens = current.split(" ");
        let command = tokens.shift();

        if (command == "Blacklist") {
            let idxOfName = friendsList.indexOf(String(tokens));
            if (idxOfName >= 0) {
                friendsList.splice(idxOfName, 1, "Blacklisted");
                console.log(`${tokens} was blacklisted.`);
                blacklistedCount++;
            } else {
                console.log(`${tokens} was not found.`);
            }
        } else if (command == "Change") {
            let idx = Number(tokens[0]);
            if (idx < 0 || idx > friendsList.length - 1) {
                continue;
            } else {
                console.log(`${friendsList[idx]} changed his username to ${tokens[1]}.`);
                friendsList.splice(idx, 1, tokens[1]);
            }
        } else if (command == "Report") {
            console.log(`Blacklisted names: ${blacklistedCount}`);
            console.log(`Lost names: ${lostNames}`);
            console.log(friendsList.join(" "));
        } else if (command == "Error") {
            let idx = Number(tokens[0]);
            if (idx < 0 || idx > friendsList.length - 1 || friendsList[idx] == "Lost" || friendsList[idx] == "Blacklisted") {
                continue;
            } else {
                console.log(`${friendsList[idx]} was lost due to an error.`);
                friendsList.splice(idx, 1, "Lost");
                lostNames++;
            }
        }

    }

}

friendListMaintenance(["Mike, John, Eddie, William", "Blacklist Maya", "Blacklist John", "Error 1", "Change 1 George", "Report"])