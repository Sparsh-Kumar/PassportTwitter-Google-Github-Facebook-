

// importing all the modules

const path = require ('path');
const passport = require ('passport');
const googleStrategy = require ('passport-google-oauth2');
const { googleModel } = require (path.resolve (__dirname, '..', 'database', 'models', 'googleModel'));
const { config: { googleConfig }} = require (path.resolve (__dirname, '..', 'config', 'config'));

// make use of google strategy
passport.use (new googleStrategy (
    {
        clientID: googleConfig.clientID,
        clientSecret: googleConfig.clientSecret,
        callbackURL: googleConfig.callbackURL
    }, (accessToken, refreshToken, profile, done) => {
        googleModel.findOrCreate ({
            username: profile._json.name,
            email: profile.email
        }).then ((user) => {
            return done (null, user);
        }).catch ((error) => {
            return done (error, null);
        });
    }
));

// exporting the google configured passport
module.exports = {
    googleController: passport
}