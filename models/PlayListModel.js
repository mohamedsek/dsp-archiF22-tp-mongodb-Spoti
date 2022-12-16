const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
    name: { type: String },
    songs: [],
    user: {}
});

const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = PlayList;