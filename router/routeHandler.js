

// importing all the modules
const path = require ('path');
const routeHandler = require ('express').Router ();
const { loginController } = require (path.resolve (__dirname, '..', 'controllers', 'loginController'));
const { githubController } = require (path.resolve (__dirname, '..', 'strategies', 'githubStrategy'));
const { googleController } = require (path.resolve (__dirname, '..', 'strategies', 'googleStrategy'));
const { facebookController } = require (path.resolve (__dirname, '..', 'strategies', 'facebookStrategy'));
const { errorHandlerMiddleware } = require (path.resolve (__dirname, '..', 'errorHandlerMiddleware', 'errorHandlerMiddleware'));

// handling the /login route
routeHandler.get ('/login', loginController)

// routes for github login and github callback
routeHandler.get ('/login/auth/github', githubController.authenticate ('github'));
routeHandler.get ('/login/auth/github/callback', githubController.authenticate ('github', { session: false }), errorHandlerMiddleware, (req, res) => {
    //console.log (req.user); // the generated or foundUser can be logged here
    return res.status (200).send ({
        status: 'success',
        message: 'successfully logged in using github',
        profile: req.user.doc
    })
});

// routes for google login and google callback
routeHandler.get ('/login/auth/google', googleController.authenticate ('google', { scope: ['email', 'profile'] }));
routeHandler.get ('/login/auth/google/callback', googleController.authenticate ('google', { session: false }), errorHandlerMiddleware, (req, res) => {
    return res.status (200).send ({
        status: 'success',
        message: 'successfully logged in using google',
        profile: req.user.doc
    })
})

// routes for facebook login and facebook callback
routeHandler.get ('/login/auth/facebook', facebookController.authenticate ('facebook', { scope: ['email'] }));
routeHandler.get ('/login/auth/facebook/callback', facebookController.authenticate ('facebook', { session: false }), errorHandlerMiddleware, (req, res) => {
    return res.status (200).send ({
        status: 'success',
        message: 'successfully logged in using facebook',
        profile: req.user.doc
    })
})

// exporting the RouteHandler
module.exports = {
    routeHandler
}