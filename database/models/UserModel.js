

// importing all the modules

const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const path = require ('path');
const { config } = require (path.resolve (__dirname, '..', '..', 'config', 'config'));
const findOrCreate = require ('mongoose-findorcreate');
const { validateUsername, validateEmail } = require (path.resolve (__dirname, '..', '..', 'validators', 'validators'));

// defining the userSchema
const UserSchema = new mongoose.Schema ({

    username: {
        type: String,
        unique: true,
        trim: true,
        validate: {
            validator: (username) => {
                return validateUsername (username);
            },
            message: '{VALUE} is not a valid username'
        }
    },

    email: {

        type: String,
        unique: true,
        trim: true,
        validate: {
            validator: (email) => {
                return validateEmail (email);
            },
            message: '{VALUE} is not a valid email'
        }
    },

    github_url: {
        type: String,
        required: false,
        trim: true,
    }

}, { timestamps: true });

// making use of the uniqueValidator plugin
mongoose.plugin (uniqueValidator);

// making use of findOrCreate plugin
mongoose.plugin (findOrCreate);

// making the userModel
const UserModel = mongoose.model ('user', UserSchema);

// exporting the userModel
module.exports = {
    UserModel
}