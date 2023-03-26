
const Cart = require("./cart.models");
const Order = require("./order.model");
const Product = require("./product.models");
const ProductInCart = require("./product_in_cart.models");
const ProductInOrder = require("./product_in_order.models");
const User = require("./user.models");



const initModels = () => {

User.hasMany( Order,{foreignKey: "userId" });
Order.belongsTo(User,{foreignKey: "userId"});

User.hasMany(Cart,{foreignKey:"userId"});
Cart.belongsTo(User,{foreignKey:"userId"});

User.hasMany(Product,{foreignKey:"userId"});
Product.belongsTo(User,{foreignKey:"userId"});

Cart.hasMany(ProductInCart,{foreignKey:"cartId"});
ProductInCart.belongsTo(Cart,{foreignKey:"cartId"});

Product.hasMany(ProductInCart,{foreignKey:"productId"});
ProductInCart.belongsTo(Product,{foreignKey:"productId"});

Product.hasMany(ProductInOrder,{foreignKey:"productId"});
ProductInOrder.belongsTo(ProductInOrder,{foreignKey:"productId"});

Order.hasMany(ProductInOrder,{foreignKey:"orderId"});
ProductInOrder.belongsTo(Order,{foreignKey:"orderId"});



};



module.exports = initModels;