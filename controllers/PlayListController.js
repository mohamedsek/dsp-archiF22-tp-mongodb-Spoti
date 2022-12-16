const PlayListModel = require('../models/PlayListModel')

exports.getAllPlayLists = async (req, res, next) => {
    try {
        console.log(req.body)

        let PlayList = await PlayListModel.find({}, function (error, PlayList) {
            if (error) console.log(error);
            res.json(PlayList);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.getPlayList = async (req, res, next) => {
    try {
        console.log(req.params)

        let PlayList = await PlayListModel.findById({ _id: req.params.id }, function (error, PlayList) {
            if (error) console.log(error);
            res.json(PlayList);
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.addPlayList = async (req, res, next) => {
    try {
        const newPlayList = new PlayListModel(req.body);
        newPlayList.save((err, PlayList) => {
            if (err) {
                console.error(err);
                res.send({ message: "ERROR", err })
            }
            res.send({ message: "PlayList created !!", PlayList })
        })
    } catch (err) {
        next(err)
    }
}
exports.updatePlayList = async (req, res, next) => {
    try {
        console.log(req.body)

        let PlayList = await PlayListModel.findById(req.params.id, (error, PlayList) => {
            if (error) console.log(error);
            PlayList = Object.assign(PlayList, req.body).save((error, PlayListUpdated) => {
                if (error) console.error(error);
                res.json(PlayListUpdated);
            })
        }).clone();
    } catch (err) {
        next(err)
    }
}
exports.deletePlayList = async (req, res, next) => {
    try {
        console.log(req.params)

        let PlayList = await PlayListModel.findByIdAndDelete(req.params.id, (error, PlayList) => {
            if (error) console.log(error);
            res.json({
                message : "PlayList deleted succesfully"
            });
        }).clone();
    } catch (err) {
        next(err)
    }
}