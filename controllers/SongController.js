const SongModel = require('../models/SongModel')

exports.getAllSongs = async (req, res, next) => {
    try {
        console.log(req.body)

        let Song = await SongModel.find({}, function (error, Song) {
            if (error) console.log(error);
            res.json(Song);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.getSong = async (req, res, next) => {
    try {
        console.log(req.params)

        let Song = await SongModel.findById({ _id: req.params.id }, function (error, Song) {
            if (error) console.log(error);
            res.json(Song);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.addSong = async (req, res, next) => {
    try {
        const newSong = new SongModel(req.body);
        newSong.save((err, Song) => {
            if (err) {
                console.error(err);
                res.send({ message: "ERROR", err })
            }
            res.send({ message: "Song created !!", Song })
        })
    } catch (err) {
        next(err)
    }
}
exports.updateSong = async (req, res, next) => {
    try {
        console.log(req.body)

        let Song = await SongModel.findById(req.params.id, (error, Song) => {
            if (error) console.log(error);
            Song = Object.assign(Song, req.body).save((error, SongUpdated) => {
                if (error) console.error(error);
                res.json(SongUpdated);
            })
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.deleteSong = async (req, res, next) => {
    try {
        console.log(req.params)

        let Song = await SongModel.findByIdAndDelete(req.params.id, (error, Song) => {
            if (error) console.log(error);
            res.json({
                message : "song deleted succesfully"
            });
        }).clone();
    } catch (err) {
        next(err)
    }
}