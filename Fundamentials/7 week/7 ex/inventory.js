function inventory(arr) {

    let heroes = [];

    for (let item of arr) {

        let heroAsArr = item.split(" / ");

        let hero = { name: heroAsArr[0], level: Number(heroAsArr[1]), items: heroAsArr[2] };
        heroes.push(hero)

    }
    
    heroes.sort((a, b) => a.level - b.level);
    heroes.forEach(i => { console.log(`Hero: ${i.name}\nlevel => ${i.level}\nitems => ${i.items}`) });

}


inventory([

    'Isacc / 25 / Apple, GravityGun',

    'Derek / 12 / BarrelVest, DestructionSword',

    'Hes / 1 / Desolator, Sentinel, Antara'

])