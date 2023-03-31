
/**
 * @param {String} name - Name of friend
 * @param {Number} amountCash - Amount of cash
 * @param {Friend} friend - friend of mine 
 */


class Friend {

    constructor(name, amountCash, friend) {
        this.name = name;
        this.amountCash = amountCash;
        this.friend = friend;
    }

    getAllCash() {

        if (this.friend === null) {
            return this.amountCash;
        }
        if(this.friend instanceof Friend) {
            return this.amountCash + this.friend.getAllCash()
        }

        if(this.friend instanceof Array) {
            return this.friend.reduce((accumulator, friend)=> accumulator + friend.getAllCash(), this.amountCash);
        }
    }
}

/*
Написати метод getAllCash, який повертає загальну суму моїх грошей + грошей мого друга

*/

const Fr = new Friend('Vik', 50, null);

const I = new Friend('Alice', 20, null);

const frfr = new Friend('Frfr', 50, null);

/*
В кожного екземпляра класу Friend може бути або null друзів, або один друг, або масив друзів, кожен з яких може мати null/Friend/[Friend]

Переписати метод getAllCash на рекурсію, щоб він міг порахувати кошти всієї компанії

*/

const friendOfAll = new Friend('Kay', 50, [Fr, I, frfr]);