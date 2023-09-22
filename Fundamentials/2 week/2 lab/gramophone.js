function gramophone(bandName, albumName, songName) {

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotatedTimes = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(rotatedTimes)} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');