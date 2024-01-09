function aMinerTask(arr) {

    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        let resourceType = arr[i];
        let qty = Number(arr[i + 1]);
        if(resourceType in resources){
            resources[resourceType] += qty;
            continue;
        }
        resources[resourceType] = qty;
    }
    for (let [resource, qty] of Object.entries(resources)) {
        console.log(`${resource} -> ${qty}`);
    }
    
}

aMinerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])