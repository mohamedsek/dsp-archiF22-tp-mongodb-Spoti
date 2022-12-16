const SongRouter = require('express').Router();
const SongController = require('../controllers/SongController')

SongRouter.get('/all',SongController.getAllSongs)
SongRouter.get('/:id',SongController.getSong)
SongRouter.post('/addSong',SongController.addSong)
SongRouter.put('/:id',SongController.updateSong)
SongRouter.delete('/:id',SongController.deleteSong)


module.exports = SongRouter