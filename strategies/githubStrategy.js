

// importing all the modules
const passport = require ('passport');
const githubStrategy = require ('passport-github');
const path = require ('path');
const { githubModel } = require (path.resolve (__dirname, '..', 'database', 'models', 'githubModel'));
const { config: { githubConfig } } = require (path.resolve (__dirname, '..', 'config', 'config'));

// using the github Strategy with passport
passport.use (new githubStrategy (
    {
        clientID: githubConfig.clientID,
        clientSecret: githubConfig.clientSecret,
        callbackURL: githubConfig.callbackURL
    },
    (accessToken, refreshToken, profile, done) => {
        githubModel.findOrCreate ({
            username: profile._json.login,
            githubURL: profile._json.html_url
        }).then ((user) => {
            return done (null, user);
        }).catch ((error) => {
            return done (error, null);
        })
    }
));

// exporting the required configuration 
module.exports = {
    githubController: passport
}

