const MoviesRouter = require('express').Router();
const MoviesController = require('../controllers/MoviesController')

MoviesRouter.get('/all',MoviesController.getAllMovies)
MoviesRouter.get('/:id',MoviesController.getMovie)
MoviesRouter.post('/addMovie',MoviesController.addMovie)
MoviesRouter.put('/:id',MoviesController.updateMovie)
MoviesRouter.delete('/:id',MoviesController.deleteMovie)

module.exports = MoviesRouter