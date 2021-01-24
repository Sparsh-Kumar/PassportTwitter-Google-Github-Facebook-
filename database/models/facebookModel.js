


// importing all the modules

const mongoose = require ('mongoose');
const uniqueValidator = require ('mongoose-unique-validator');
const path = require ('path');
const { config } = require (path.resolve (__dirname, '..', '..', 'config', 'config'));
const findOrCreate = require ('mongoose-findorcreate');
const { validateEmail, validateUsername } = require (path.resolve (__dirname, '..', '..', 'validators', 'validators'));



// defining the facebookSchema 

const facebookSchema = new mongoose.Schema ({
    fb_id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: (username) => {
                return validateUsername (username)
            },
            message: '{VALUE} is not a valid username'
        }
    }
}, { timestamps: true });



// making use of unique plugin
mongoose.plugin (uniqueValidator);

// making use of findOrCreate plugin
mongoose.plugin (findOrCreate);


// defining the facebookModel
const facebookModel = mongoose.model ('facebook', facebookSchema);

// exporting the model to make use
module.exports = {
    facebookModel
}