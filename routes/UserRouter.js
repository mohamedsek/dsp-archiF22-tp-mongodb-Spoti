const UserRouter = require('express').Router();

UserRouter.get('/getuser/:id',UserController.getUser)
UserRouter.post('/adduser',UserController.addUser)
UserRouter.post('/updateuser',UserController.updateUser)
UserRouter.post('/deleteuser',UserController.deleteUser)


module.exports = UserRouter