


// importing all the modules
const validator = require ('validator');

// defining the validateEmail function
const validateEmail = (email = undefined) => {
    return validator.isEmail (email);
}

// defining the validateUsername function
const validateUsername = (username = undefined) => {
    if (username) {
        return (!validator.isEmpty (username));
    }
}

// exporting the functions
module.exports = {
    validateUsername,
    validateEmail
}