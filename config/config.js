const config = {
    PORT: 80,
    mongooseURI: "YOUR MONGO DATABASE URL",
    cookieName: 'appCookies',
    cookieLifeTime: '60000',
    isSecure: false,
    CookieSecret: '#@#%@#%!',
    githubConfig: {
        clientID: 'YOUR GITHUB CLIENT ID',
        clientSecret: 'YOUR GITHUB CLIENT SECRET',
        callbackURL: 'YOUR GITHUB CALLBACK URL'
    },
    googleConfig: {
        clientID: 'YOUR GOOGLE CLIENT ID',
        clientSecret: 'YOUR GOOGLE CLIENT SECRE',
        callbackURL: 'YOUR GOOGLE CALLBACK URL'
    },
    facebookConfig: {
        clientID: 'YOUR FACEBOOK CLIENT ID',
        clientSecret: 'YOUR FACEBOOK CLIENT SECRET',
        callbackURL: 'YOUR FACEBOOK CALLBACK URL'
    }
}

module.exports = {
    config
}