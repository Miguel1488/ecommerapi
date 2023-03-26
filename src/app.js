const express = require("express");
const morgan = require("morgan");
const db = require("./utils/database");
const cors = require("cors");
const initModels = require("./models/initModel");
const userRouter = require("./routes/user.routes");
const erroHandlerRouter = require("./routes/errorhandlers.routers");




const app = express();
initModels();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000

db.authenticate()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch((error) => console.log(error));

db.sync({ alter: false }) // alterar los atributos
    .then(() => console.log("Base de datos sync"))
    .catch((error) => console.log(error));

app.use(userRouter);
erroHandlerRouter(app);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});


