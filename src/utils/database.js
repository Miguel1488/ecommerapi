const { Sequelize } = require('sequelize');

    const db = new Sequelize({
        database: "proyectofinal_db",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "admin",
        dialect: "postgres",
        logging: false,
    });
    
    module.exports = db;
   