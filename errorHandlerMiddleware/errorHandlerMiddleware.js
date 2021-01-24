

// defining the error handler middleware
const errorHandlerMiddleware = (error, req, res, next) => {
    if (error) {
        return res.status (401).render  ('layouts/error', {
            error: error.message
        });
    } else {
        next ();
    }
}

// exporting the errorHandlerMiddleware
module.exports = {
    errorHandlerMiddleware
}