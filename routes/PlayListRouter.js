const PlayListRouter = require('express').Router();
const PlayListController = require('../controllers/PlayListController')

PlayListRouter.get('/all',PlayListController.getAllPlayLists)
PlayListRouter.get('/:id',PlayListController.getPlayList)
PlayListRouter.post('/addplaylist',PlayListController.addPlayList)
PlayListRouter.put('/:id',PlayListController.updatePlayList)
PlayListRouter.delete('/:id',PlayListController.deletePlayList)


module.exports = PlayListRouter