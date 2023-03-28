class Squirell {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    eat() {
        return `${this.name} is eating`
    }

    climb() {
        return `${this.name} on tree!`
    }   
}

class FlyingSquirell extends Squirell{
    constructor(name, color) {
        super(name, color);
    }

    fly() {
        return `${this.name} is flying`
    }

}

/*
Написати класс казкової білки, яка вміє літати, танцювати (dance) і пісні співати (singASong)
Пісні будуть задаватися масивом назв пісень при створенні білки


Додати казковій білці метод, який перевіряє, чи вміє білка співати задану пісню
*/


class FairySquirell extends FlyingSquirell {
    constructor(name, color, songs = []) {
        super(name, color);
        this.songs = songs;
    }

    singASong() {
        const randomSong = Math.round(Math.random()*10);
        return `Squirell song a ${this.songs[randomSong]}`;
    }

    canISongThis(songName) {
        return this.songs.includes(songName)
    }
}

