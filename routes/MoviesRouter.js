const MoviesRouter = require('express').Router();
const MoviesController = require('../controllers/MoviesController')

MoviesRouter.get('/',MoviesController.getAllMovies)
MoviesRouter.get('/:id',MoviesController.getMovie)
MoviesRouter.post('/',MoviesController.addMovie)
MoviesRouter.put('/:id',MoviesController.updateMovie)
MoviesRouter.delete('/:id',MoviesController.deleteMovie)

module.exports = MoviesRouter