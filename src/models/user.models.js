const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../utils/database");

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },

    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,

    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    avatar: {
        type: DataTypes.STRING,

    },

    emailverify: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

},
    {
        timestamps: true,
        updatedAt: false,
        hooks: {

            beforeCreate: async (user) => {
                try {
                    const sat = await bcrypt.genSalt(10)
                    const Password = await bcrypt.hash(user.password, sat)
                    user.password = Password

                } catch (error) {
                    throw error;
                }
            }
        }
    }


);

module.exports = User;