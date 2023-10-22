function theAngryCat(arr, position, str) {

    let isCheap = true;
    if (str == "expensive") {
        isCheap = false;
    }
    let leftSum = 0;
    let RightSum = 0;

    let posNum = arr[position];

    let filteredArr;

    if (isCheap) {
        for (let i = 0; i < position; i++) {
            let curNum = arr[i];
            if (curNum < posNum) {
                leftSum += curNum;
            }
        }
        for (let i = position + 1; i < arr.length; i++) {
            let curNum = arr[i];
            if (curNum < posNum) {
                RightSum += curNum;
            }
        }
        if (leftSum >= RightSum) {
            console.log(`Left - ${leftSum}`);

        } else {
            console.log(`Right - ${RightSum}`);
        }
    } else {
        for (let i = 0; i < position; i++) {
            let curNum = arr[i];
            if (curNum >= posNum) {
                leftSum += curNum;
            }
        }
        for (let i = position + 1; i < arr.length; i++) {
            let curNum = arr[i];
            if (curNum >= posNum) {
                RightSum += curNum;
            }
        }
        if (leftSum >= RightSum) {
            console.log(`Left - ${leftSum}`);

        } else {
            console.log(`Right - ${RightSum}`);
        }
    }


}
theAngryCat([1, 5, 1], 1, "cheap")
theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap")
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")