const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Cart = db.define("carts", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id",
    },
    totalprice:{
        type: DataTypes.FLOAT,
        defaultValue:0.0,
    },


});


module.exports = Cart;


