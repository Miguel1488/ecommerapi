const { logError, ormErrorHandler, erroHandler } = require("../middlewares/error.hamdler");


const erroHandlerRouter = (app) => {
    app.use(logError)
    app.use(ormErrorHandler)
    app.use(erroHandler)

    app.use("*", (req, res) => {
        return res
            .status(404)
            .send("not found")


    })

};


module.exports = erroHandlerRouter;