const MoviesModel = require('../models/MoviesModel')

exports.getAllMovies = async (req, res, next) => {
    try {
        console.log(req.body)

        let Movies = await MoviesModel.find({}, function (error, Movies) {
            if (error) console.log(error);
            res.json(Movies);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.getMovie = async (req, res, next) => {
    try {
        console.log(req.params)

        let Movies = await MoviesModel.findById({ _id: req.params.id }, function (error, Movies) {
            if (error) console.log(error);
            res.json(Movies);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.addMovie = async (req, res, next) => {
    try {
        const newMovie = new MoviesModel(req.body);
        newMovie.save((err, Movies) => {
            if (err) {
                console.error(err);
                res.send({ message: "ERROR", err })
            }
            res.send({ message: "Movies created !!", Movies })
        })
    } catch (err) {
        next(err)
    }
}
exports.updateMovie = async (req, res, next) => {
    try {
        console.log(req.body)

        let Movies = await MoviesModel.findById(req.params.id, (error, Movies) => {
            if (error) console.log(error);
            Movies = Object.assign(Movies, req.body).save((error, MoviesUpdated) => {
                if (error) console.error(error);
                res.json(MoviesUpdated);
            })
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.deleteMovie = async (req, res, next) => {
    try {
        console.log(req.params)

        let Movies = await MoviesModel.findByIdAndDelete(req.params.id, (error, Movies) => {
            if (error) console.log(error);
            res.json({
                message : "Movies deleted succesfully"
            });
        }).clone();
    } catch (err) {
        next(err)
    }
}