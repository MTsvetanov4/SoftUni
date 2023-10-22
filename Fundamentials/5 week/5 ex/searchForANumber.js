function searchForANumber(arr1, arr2) {

    let count = 0;
    let finalArr = arr1.splice(0, arr2[0]);
    finalArr.splice(0, arr2[1]);
    for(let num of finalArr){
        if (num == arr2[2] ){
            count++;
        }
    }

console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 3, 1, 6], [5, 2, 3])
searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5])