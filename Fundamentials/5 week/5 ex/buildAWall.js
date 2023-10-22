function buildAWall(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let result = [];
    let concrete = 0;
    let workers = arr.length;

    for (let i = sortedArr[0]; i <= 30; i++) {
        let curDayConcrete = 0;

        for (let j = 0; j < workers; j++) {

            if (sortedArr[j] == 30) {
                continue;
            } else {
                curDayConcrete += 195;
            }
            arr.splice(j, 1, sortedArr[j] + 1);
        }

        if (i == 30) {
            continue;
        } else {
            result.push(curDayConcrete);
            concrete += curDayConcrete;
        }

    }

    console.log(result.join(", "));
    console.log(concrete * 1900 + " pesos");

}


buildAWall([17])
buildAWall([17, 22, 17, 19, 17])
buildAWall([21, 25, 28])