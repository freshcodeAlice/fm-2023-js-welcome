class LinkedItem {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }

    get value() {
        return this._value
    }
    set value(v) {
        this._value = v;
    }
}


class LinkedList {
    constructor(...args) {
        this.length = 0;
        this.head = null;
        this.tail = null;
    //    for (let i = 0; i < args.length; i++) {
    //     this.push(args[i]);
    //    }

        args.forEach((el) => {this.push(el)});
    }

    push(value) {
        const item = new LinkedItem(value);
        if(this.length === 0) {  // якщо він перший
        this.head = item;
        this.tail = item;
        } else { // якщо хтось вже тут стоїть
            this.tail.prev = item;
            item.next = this.tail;
            this.tail = item;

        }
        return ++this.length;
    }
}