
// require all the module
const path = require ('path');

// defining the loginController
const loginController = (req, res) => {
    try {
        return res.status (200).render ('layouts/login', {
            title: 'OAuth2.0 Login'
        });
    } catch (error) {
        return res.status (401).render ('layouts/error', {
            error: error.message
        });
    }
}

// exporting the loginController
module.exports = {
    loginController
}