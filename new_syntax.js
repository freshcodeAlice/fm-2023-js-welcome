class User {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    sendEmail() {
        return `${this.firstName} get your email`
    }
}

const user2 = new User('Karl', 'Crow');