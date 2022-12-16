const SongRouter = require('express').Router();

SongRouter.get('/getsong/:id',SongController.getSong)
SongRouter.post('/addsong',SongController.addSong)
SongRouter.post('/updatesong',SongController.updateSong)
SongRouter.post('/deletesong',SongController.deleteSong)


module.exports = SongRouter