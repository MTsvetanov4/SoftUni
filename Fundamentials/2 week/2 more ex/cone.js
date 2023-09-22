function cone(radius, height) {
    let v = (1 / 3) * Math.PI * radius ** 2 * height;
    let s = Math.sqrt((radius ** 2 + height ** 2));
    let l = Math.PI * radius * s;
    let b = Math.PI * radius ** 2;
    let area = l + b;


    console.log(`volume = ${v.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}

cone(3, 5)
cone(3.3, 7.8)