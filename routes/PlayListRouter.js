const PlayListRouter = require('express').Router();

PlayListRouter.get('/getplaylist/:id',PlayListController.getPlayList)
PlayListRouter.post('/addplaylist',PlayListController.addPlayList)
PlayListRouter.post('/updateplaylist',PlayListController.updatePlayList)
PlayListRouter.post('/deleteplaylist',PlayListController.deletePlayList)


module.exports = PlayListRouter