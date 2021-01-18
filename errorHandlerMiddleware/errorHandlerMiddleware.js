

// defining the error handler middleware
const errorHandlerMiddleware = (error, req, res, next) => {
    console.log (req.user);
    if (error) {
        return res.status (401).render  ('layouts/error', {
            error: error.message
        });
    } else {
        console.log (req.user);
        next ();
    }
}

// exporting the errorHandlerMiddleware
module.exports = {
    errorHandlerMiddleware
}