function CheckingAccount(clientId, email, firstName, lastName) {
    if (clientId.length !== 6) {
        throw new TypeError('Client ID must be a 6-digit number');
    }

    this.clientId = clientId;
    let reg = /[a-zA-Z]+@[a-zA-Z.]+/;

    if (!reg.test(email)) {
        throw new TypeError('Invalid e-mail');
    }

    this.email = email;

    if (firstName.length < 3 || firstName.length > 20) {
        throw new TypeError('First name must be between 3 and 20 characters long');
    }

    let nameReg = /[a-zA-Z]/;

    if (!nameReg.test(firstName)) {
        throw new TypeError('First name must contain only Latin characters');
    }

    this.firstName = firstName;

    if (lastName.length < 3 || lastName.length > 20) {
        throw new TypeError('Last name must be between 3 and 20 characters long')
    }

    if (!nameReg.test(lastName)) {
        throw new TypeError('Last name must contain only Latin characters');
    }

    this.lastName = lastName;
}


let obj = new checkingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
