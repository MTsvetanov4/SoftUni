function encryptingPassword(arr){

    let n = arr.shift();
    let result = [];
    
    let pattern = /(?<sep>[#|@!~$%^&*()_+=\-0A-Za-z0-9{\]}[\:;|\/.><,]+)[>](?<nums>[\d]+)([|])(?<lowers>[a-z]+)\3(?<uppers>[A-Z]+)\3(?<symbols>[^><]+)[<]\1$/;
    
    for(let line of arr){
        let match = pattern.exec(line)
        if(match){
            let matchLength = match[0];
            if(matchLength.length<line.length){
                console.log("Try another password!");
                continue;
            }
            let {nums, lowers, uppers, symbols} = match.groups;
            console.log("Password: " + nums+lowers+uppers+symbols);
        }else{
            console.log("Try another password!");
        }
       
    }



}

encryptingPassword(["5", "aa>111|mqu|BAU|mqu<aa","()>111!aaa!AAA!^&*<()","o>088|abc|AAA|***<o","asd>asd|asd|ASD|asd<asd","*>088|zzzz|ZzZ|123<*"])
encryptingPassword(["3",

"##>00|no|NO|!!!?<###",

"##>123|yes|YES|!!!<##",

"$$<111|noo|NOPE|<<>$$"])