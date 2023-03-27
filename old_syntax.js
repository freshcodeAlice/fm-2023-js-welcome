function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    
}


function UserProto () {
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`
    }


    this.sendEmail = function() {
        return `${this.firstName} get your email`
    }
}

User.prototype = new UserProto();

const user1 = new User('John', 'Doe');