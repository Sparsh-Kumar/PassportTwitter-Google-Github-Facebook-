


// importing all the modules

const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const path = require ('path');
const { config } = require (path.resolve (__dirname, '..', '..', 'config', 'config'));
const findOrCreate = require ('mongoose-findorcreate');
const { validateEmail, validateUsername } = require (path.resolve (__dirname, '..', '..', 'validators', 'validators'));


// defining the UserSchema for Google Sign In
const googleUserSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator : (username) => {
                return validateUsername (username);
            },
            message: '{VALUE} is not a valid username'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (email) => {
                return validateEmail (email);
            },
            message: '{VALUE} is not a valid Email'
        }
    }
}, { timestamps: true });


// making use of unique plugin
mongoose.plugin (uniqueValidator);

// making use of findOrCreate plugin
mongoose.plugin (findOrCreate);

// making the UserModel
const googleModel = mongoose.model ('google', googleUserSchema);

// exporting the UserModel to use
module.exports = {
    googleModel
}