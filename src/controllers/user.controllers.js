const UserServices = require("../services/user.services");


const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;

        const result = await UserServices.create(newUser);
        res.status(201).json(result);

    } catch (error) {

        next(error);

    }
};


module.exports = {
    createUser,
}