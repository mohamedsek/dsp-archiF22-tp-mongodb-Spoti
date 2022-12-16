const UserRouter = require('express').Router();

UserRouter.get('/getuser/:id',UserController.getuser)
UserRouter.post('/adduser',UserController.adduser)
UserRouter.post('/updateuser',UserController.updateuser)
UserRouter.post('/deleteuser',UserController.deleteuser)


module.exports = UserRouter