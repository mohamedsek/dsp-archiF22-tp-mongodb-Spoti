const mongoose = require('mongoose');
const User = require('./UserModel');
const Song = require('./SongModel');
const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
    name: { type: String },
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const PlayList = mongoose.model('PlayList', PlayListSchema);

module.exports = PlayList;