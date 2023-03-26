const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Order = db.define("orders", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    totalPrice: {
        type: DataTypes.FLOAT,
        defaultValue:0.0,
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

});



module.exports = Order;
