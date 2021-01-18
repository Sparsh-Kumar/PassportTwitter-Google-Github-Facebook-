const config = {
    PORT: 80,
    mongooseURI: "your mongodb URI",
    cookieName: 'appCookies',
    cookieLifeTime: '60000',
    isSecure: false,
    CookieSecret: '#@#%@#%!',
    githubConfig: {
        clientID: 'github client ID',
        clientSecret: 'github client Secret',
        callbackURL: 'github callback URL'
    },
    googleConfig: {
        clientID: 'google client ID',
        clientSecret: 'google client secret',
        callbackURL: 'google callback URL'
    }
}

module.exports = {
    config
}