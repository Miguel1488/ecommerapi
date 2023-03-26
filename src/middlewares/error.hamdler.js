
const { ValidationError, DatabaseError, ConnectionError, ConnectionAcquireTimeoutError, ConnectionRefusedError, ConnectionTimedOutError, InvalidConnectionError } = require("sequelize")

const logError = (error, req, res, next) => {

    console.log(error);
    next(error);


};

const erroHandler = (error, req, res, next) => {
    let { status } = error
    return res.status(status || 500)
        .json({
            message: error.message,
            errorName: error.name,
        })

};

const ormErrorHandler = (err, req, res, next) => {
    if (err instanceof ConnectionError || err instanceof ConnectionAcquireTimeoutError || err instanceof ConnectionRefusedError || err instanceof ConnectionTimedOutError || err instanceof InvalidConnectionError) {

        return res.status(409).json({
            name: err.name,
            message: "fallo la conexion de base de datos",
        })

    }
    if (err instanceof ValidationError) {
        return res.status(409).json({
            name: err.name,
            message: err.message,
            errors: err.err,

        })
    }

    if (err instanceof DatabaseError) {
        return res.status(409).json({
            name: err.name,
            message: err.message,
            errors: err.errors,
            params: err["parameters"]

        })
    }
    next(err);
}


module.exports = {
    logError,
    erroHandler,
    ormErrorHandler
}