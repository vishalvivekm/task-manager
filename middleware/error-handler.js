const {CustomAPIError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res,next) => { // Error-handling middleware always takes four arguments.
    if ( err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(500).json({msg:err})
}

module.exports = errorHandlerMiddleware

/*
. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the next object, you must specify it to maintain the signature. Otherwise, the next object will be interpreted as regular middleware and will fail to handle errors.
*/
/*
express docs on error-handling mws: https://expressjs.com/en/guide/using-middleware.html#middleware.error-handling
*/
