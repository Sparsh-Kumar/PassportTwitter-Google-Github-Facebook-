


// importing all the modules

const path = require ('path');
const passport = require ('passport');
const facebookStrategy = require ('passport-facebook');
const { facebookModel } = require (path.resolve (__dirname, '..', 'database', 'models', 'facebookModel'));
const { config: { facebookConfig }} = require (path.resolve (__dirname, '..', 'config', 'config'));


// configuring passport to use facebook strategy
passport.use (new facebookStrategy (
    {
        
        clientID: facebookConfig.clientID,
        clientSecret: facebookConfig.clientSecret,
        callbackURL: facebookConfig.callbackURL,
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified']

    }, (accessToken, refreshToken ,profile, done) => {
        facebookModel.findOrCreate ({
            fb_id: profile._json.id,
            username: profile._json.first_name + ' ' + profile._json.last_name
        }).then ((user) => {
            return done (null, user);
        }).catch ((error) => {
            return done (error, null);
        })
    }
));

// exporting the facebook configured passport
module.exports = {
    facebookController: passport
}
