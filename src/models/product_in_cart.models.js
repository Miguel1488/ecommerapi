const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const ProductInCart = db.define("product_in_card", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "cart_id",

    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",

    },

    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },

    price: {
        type: DataTypes.INTEGER,
        defaultValue: 0.0,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },


});



module.exports = ProductInCart;