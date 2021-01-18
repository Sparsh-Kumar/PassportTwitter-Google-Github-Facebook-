
// importing all the modules
const path = require ('path');
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const session = require ('express-session');
const { config } = require (path.resolve (__dirname, 'config', 'config'));
const helmet = require ('helmet');
const hbs = require ('hbs');
const xss = require ('xss-clean');
const passport = require('passport');
const port = process.env.PORT || config.PORT;
const { routeHandler } = require (path.resolve (__dirname, 'router', 'routeHandler'));

// configuring the mongoose to  use Promises
mongoose.Promise = global.Promise;
mongoose.connect (config.mongooseURI).then (() => { console.log (`database Connected: ${config.mongooseURI}`)}).catch ((error) => { console.log (`error: ${error.message}`); })

// making the express instance
const app = express ();
app.use (helmet ());
app.set ('view engine', 'hbs');
hbs.registerPartials (path.resolve (__dirname, 'views', 'partials'));
app.use (express.static (path.resolve (__dirname, 'public')));
app.use (bodyParser.urlencoded ({ extended: true }));

// configuring sessions in our application
app.use (session ({
    name: config.cookieName,
    resave: false,
    cookie: {
        maxAge: parseInt (config.cookieLifeTime),
        sameSite: true,
        secure: config.isSecure
    },
    saveUninitialized: false,
    secret: config.CookieSecret
}));

// initializing the passport module
app.use (passport.initialize ());

// handling the /api route
app.use ('/api', routeHandler);

// making the app listen on a particular port
app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})