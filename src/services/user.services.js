const User = require("../models/user.models");


class UserServices {
    static async create(newUser){
        try {
            const userCreated = await User.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
            
        }

    }


module.exports = UserServices;