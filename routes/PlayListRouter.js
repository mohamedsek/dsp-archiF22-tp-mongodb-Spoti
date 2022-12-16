const PlayListRouter = require('express').Router();
const PlayListController = require('../controllers/PlayListController')

PlayListRouter.get('/getplaylist/:id',PlayListController.getPlayList)
PlayListRouter.post('/addplaylist',PlayListController.addPlayList)
PlayListRouter.post('/updateplaylist',PlayListController.updatePlayList)
PlayListRouter.post('/deleteplaylist',PlayListController.deletePlayList)


module.exports = PlayListRouter