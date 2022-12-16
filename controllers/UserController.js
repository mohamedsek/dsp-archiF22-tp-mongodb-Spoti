const UserModel = require('../models/UserModel')

exports.getUser = async (req, res, next) => {
    try {
        console.log(req.body)

        let User = await UserModel.findById(req.body.id , (error, User) => {
            if (error) console.log(error);
                res.json(User);
        });
    } catch (err) {
        next(err)
    }
}
exports.addUser = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}
exports.updateUser = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}
exports.deleteUser = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}