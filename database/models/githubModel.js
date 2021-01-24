


// importing all the modules

const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const path = require ('path');
const { config } = require (path.resolve (__dirname, '..', '..', 'config', 'config'));
const findOrCreate = require ('mongoose-findorcreate');
const { validateEmail, validateUsername } = require (path.resolve (__dirname, '..', '..', 'validators', 'validators'));


// defining the githubSchema
const githubSchema = new mongoose.Schema ({

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (username) => {
                return validateUsername (username);
            },
            message: '{VALUE} is not a valid username'
        }
    },

    githubURL: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }

}, { timestamps: true });

// making use of unique plugin
mongoose.plugin (uniqueValidator);

// making use of findOrCreate plugin
mongoose.plugin (findOrCreate);

// making the githubModel
const githubModel = mongoose.model ('github', githubSchema);

// exporting the githubModel for usage
module.exports = {
    githubModel
}